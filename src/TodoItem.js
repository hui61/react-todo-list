import React, {useEffect, useState} from "react";
import style from "./css/mystyle.module.css"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import {Item} from "./type";

const TodoItem = ({deleteItem,completeItem,item,index}) => {
    const handleDelete = () => {
        if (deleteItem) {
            deleteItem(index)
        }
    };

    const markComplete = () => {
        if (completeItem) {
            item=completeItem(index)
        }
    }
    return <div className={style.todoItem} align="left">
            <Checkbox onChange={markComplete} checked={item.isComplete}/>
            {item.content}
            <IconButton onClick={handleDelete}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>
}



TodoItem.propTypes={
    deleteItem:PropTypes.func.isRequired,
    completeItem:PropTypes.func.isRequired,
    item:PropTypes.shape(Item).isRequired,
    index:PropTypes.string.isRequired
}

export default TodoItem