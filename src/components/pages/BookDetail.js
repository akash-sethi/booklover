import React from "react";
import { Item } from "semantic-ui-react";
import PropTypes from "prop-types";

const BookDetail = ({ detail }) => (
  <Item>
    <Item.Image size="tiny" src={detail.cover} />
    <Item.Content>
      <Item.Header as="a">{detail.title}</Item.Header>
      <Item.Description>
        <p>{detail.authors}</p>
        <span>Pages: {detail.pages}</span>
      </Item.Description>
    </Item.Content>
  </Item>
);

BookDetail.propTypes = {
  detail: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired
  }).isRequired
};

export default BookDetail;
