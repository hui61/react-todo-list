import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.item.content}
                    <button>delete</button>
                </li>
            </div>

        )
    }
}

export default TodoItem