import React from "react";

class TodoItem extends React.Component {

    handleDelete(){
        if (this.props.onSubmit) {
            const index = this.props.index
            this.props.onSubmit(index)
        }
    }

    render() {
        return (
            <div>
                <li>{this.props.item.content}
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </li>
            </div>

        )
    }
}

export default TodoItem