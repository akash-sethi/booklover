import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";
import { allBooksSelector } from "../../reducers/books";
import AddBookCtA from "../ctas/AddBookCtA";
import { fetchBooks } from "../../actions/books";
import BookDetail from "./BookDetail";

class DashboardPage extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {  books } = this.props;
    const detail = books.map((book,i) => <BookDetail key={i} detail={book}/>)
    return (
      <div>
        {books.length === 0 ? <AddBookCtA /> : (<Item.Group divided>{detail}</Item.Group>)}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  console.log("state books: ", state.books);
  return {
    books: allBooksSelector(state)
  };
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);
