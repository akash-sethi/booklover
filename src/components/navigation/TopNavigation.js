import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";
import { allBooksSelector } from "../../reducers/books";

class TopNavigation extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { logout, hasBooks, user } = this.props;
    return (
      <Menu secondary pointing>
        <Menu.Item
          as={Link}
          to="/dashboard"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        {hasBooks && (
          <Menu.Item
            name="addBook"
            active={activeItem === "addBook"}
            as={Link}
            to="/books/new"
            onClick={this.handleItemClick}
          />
        )}
        <Menu.Menu position="right">
          <Dropdown trigger={<Image avatar src='http://www.gravatar.com/avatar/?d=mm'/>}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  };
}

export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(TopNavigation);
