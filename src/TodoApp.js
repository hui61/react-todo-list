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

    handleSubmitContent(item) {
        this.state.items.push(item)
        this.setState({items: this.state.items})
    }

    handleDeleteItem(index) {
        this.state.items.splice(index, 1)
        this.setState({items: this.state.items})
    }

    render() {
        return (
            <div className="todo-app" align="center">
                <div className="todo-input">
                    <TodoInput onSubmit={this.handleSubmitContent.bind(this)}/>
                </div>
                <div className="todo-items">
                    <TodoList items={this.state.items} onSubmit={this.handleDeleteItem.bind(this)}/>
                </div>
            </div>

        )
    }
}

export default TodoApp