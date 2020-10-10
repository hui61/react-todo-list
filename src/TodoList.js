import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ deleteItem, completeItem, items}) => {
    const showItems = items.filter( item => !item.isHidden)

   return  showItems.map( (item, i)=> {
        return <TodoItem index={i} item={item} key={i}
                         deleteItem={deleteItem}
                         completeItem={completeItem}/>
    })
}

export default TodoList