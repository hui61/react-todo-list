import React from "react";

class TodoItem extends React.Component {

    handleDelete = () => {
        if (this.props.deleteItem) {
            const index = this.props.index
            this.props.deleteItem(index)
        }
    }

    markComplete = () => {
        debugger
        if (this.props.completeItem) {
            const index = this.props.index
            this.props.completeItem(index)
        }
    }

    render() {
        return (
            <li>
                <button onClick={this.markComplete}>Complete</button>
                {this.props.item.content}
                <button onClick={this.handleDelete}>Delete</button>
            </li>

        )
    }
}

export default TodoItem