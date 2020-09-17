import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios"

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

    componentDidMount() {
        this.initData()
    }

    initData = async () => {
        const result = await axios.get('http://127.0.0.1:5000/api/items');
        if (result) {
            this.setState({items: result.data.items})
        }
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