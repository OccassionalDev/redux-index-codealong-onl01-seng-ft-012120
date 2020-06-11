import React from 'react'
import { connect } from 'react-redux'

class TodosContainer extends React.Component {
 
  render() {
    return(
      <div></div>
    );
  }
};

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
export default connect()(TodosContainer);