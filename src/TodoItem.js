import React, {useEffect, useState} from "react";
import style from "./css/mystyle.module.css"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from "@material-ui/core/Checkbox";

const TodoItem = ({deleteItem,completeItem,item,index}) => {
    const [checked, setChecked] = useState(item.isComplete);
    useEffect(() => {
        setChecked(item.isComplete)
    },[item])
    const handleDelete = () => {
        if (deleteItem) {
            deleteItem(index)
        }
    };

    const markComplete = () => {
        if (completeItem) {
            item=completeItem(index)
        }
        setChecked(item.isComplete)
    }
    return <div className={style.todoItem} align="left">
            <Checkbox onChange={markComplete} checked={checked}/>
            {item.content}
            <IconButton onClick={handleDelete}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>
}

export default TodoItem