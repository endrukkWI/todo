import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          todos: [
              {
                  id: 0,
                  text: "Make dinner"
              },
              {
                  id: 1,
                  text: "Clean room"
              },
              {
                  id: 2,
                  text: "Make react app"
              }
          ],
        nextId: 3
        };

        this.addTodo = this.addTodo.bind(this);
        this.addRemove = this.removeTodo.bind(this);
    }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
            <Header />
            <TodoInput  todoText="" addTodo={this.addTodo} />
            <ul>
                {
                    this.setate.todos.map((todo) => {
                       return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                    });
                }
            </ul>
        </div>
      </div>
    );
  }

  addTodo(todoText){
      console.log('text added: ' + todoText);
  }

  removeTodo() {
      console.log('remove todo');
  }
}

export default App;
