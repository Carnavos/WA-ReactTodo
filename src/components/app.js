import React from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: true
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];

// link TodosList component within div
export default class App extends React.Component {
  // first thing that component runs
  constructor(props) {
    // connects to parent which it inherits from
    super(props);

    this.state = {
      // es6 object declaration shorthand (could be todos: todos referencing above declaration)
      todos
    };

  }

  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}
