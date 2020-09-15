import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    render() {
        debugger
        return (
            <div>
                {this.props.items.map((item,i) =>
                    <TodoItem item={item} key={i}/>
                )}
            </div>
        )
    }
}

export default TodoList