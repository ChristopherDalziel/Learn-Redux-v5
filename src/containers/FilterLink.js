// Technically a container component is just a React component that uses store.subscribe() to read part of the redux state and supply props to a presentational component it renders.

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

// To use connect() we define a special function called mapStateToProps that describes how to transform the current redux store that into the props you want to pass to a presentational component you're wrapping.
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

// Container components can dispatch actions in a similar way, you can define a function called mapDispatchToProps() that recieves the dispatch() method and returns callback props you want to inject into the presentational component.
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
