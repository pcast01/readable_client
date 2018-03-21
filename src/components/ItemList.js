import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";

class ItemList extends Component {
  componentDidMount() {
    //console.log("component did mount");
    this.props.fetchData("http://localhost:3001/posts", "posts");
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <ul>
        {this.props.items.map(item => <li key={item.title}>{item.body}</li>)}
      </ul>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, type) => dispatch(itemsFetchData(url, type))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
