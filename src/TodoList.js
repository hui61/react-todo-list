import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import {Item} from "./type";

const TodoList = ({ deleteItem, completeItem, items}) => {
    const showItems = items.filter( item => !item.isHidden)

   return  showItems.map( (item, i)=> {
        return <TodoItem index={i} item={item} key={i}
                         deleteItem={deleteItem}
                         completeItem={completeItem}/>
    })
}

TodoList.propTypes={
    deleteItem:PropTypes.func.isRequired,
    completeItem:PropTypes.func.isRequired,
    items:PropTypes.arrayOf(PropTypes.shape(Item)).isRequired
}

export default TodoList