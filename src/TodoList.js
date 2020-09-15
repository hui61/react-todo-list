import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.items.map((item, i) =>
                    <TodoItem index={i} item={item} key={i} onSubmit={this.props.onSubmit.bind(this)}/>
                )}
            </div>
        )
    }
}

export default TodoList