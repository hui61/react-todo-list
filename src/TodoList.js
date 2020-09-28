import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    render() {
        const showItems = this.props.items.filter(
            function (item) {
                return item.isHidden === false
            }
        )
        debugger
        console.log("here")
        return (
            <div>
                {showItems.map( (item, i)=> {
                        debugger
                        return <TodoItem index={i} item={item} key={i}
                                         deleteItem={this.props.deleteItem.bind(this)}
                                         completeItem={this.props.completeItem.bind(this)}/>
                    }
                )}
            </div>
        )
    }
}

export default TodoList