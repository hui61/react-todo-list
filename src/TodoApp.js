import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    handleSubmitComment(item) {
        debugger
        console.log(item)
        this.state.items.push(item)
        this.setState({items: this.state.items})
        console.log(this.state.items)
    }

    render() {
        return (
            <div className="todo-app">
                <div className="todo-input">
                    <TodoInput onSubmit={this.handleSubmitComment.bind(this)}/>
                </div>
                <div className="todo-items">
                    <TodoList items={this.state.items}/>
                </div>
            </div>

        )
    }
}

export default TodoApp