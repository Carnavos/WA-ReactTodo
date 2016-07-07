import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

// todos-list contains renderItems function which maps todos
// (located in App main component (hardcoded for now) and passes into tbody inside render)

export default class TodosList extends React.Component {
  renderItems() {
    // lodash map
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
      // es6 spreading, same as task=(todo.task) isCompleted={todo.isCompleted}
      } {...todo} />);

    // same as
    // function(todo, index) {
    //   return <TodosListItem />
    // }
  }
  render() {
    console.log(this.props.todos);
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
