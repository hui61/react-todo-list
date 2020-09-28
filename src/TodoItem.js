import React from "react";
import style from "./css/mystyle.module.css"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from "@material-ui/core/Checkbox";

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
            <div className={style.todoItem} align="left">
                <Checkbox onChange={this.markComplete} checked={this.props.item.isComplete}/>
                <text>{this.props.item.content}</text>
                <IconButton onClick={this.handleDelete}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </div>

        )
    }
}

export default TodoItem