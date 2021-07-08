import React, {useEffect, useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios"
import TodoFoot from "./TodoFoot";
import style from "./css/mystyle.module.css"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Radio from "@material-ui/core/Radio";

const TodoApp = () => {
    const [items, setItems] = useState([]);
    const [isLogin, setIsLogin] = useState(true);
    const handleSubmitContent = (item) => {
        if (!isLogin) {
            alert("not login")
            return
        }
        setItems([...items,item])
    }

    useEffect(() => {
        // this.initData()
    });

    const initData = async () => {
        const result = await axios.get('http://127.0.0.1:5000/api/items');
        if (result) {
            setItems(result.data.items)
        }
    }

    const handleDeleteItem = (index) => {
        if (!isLogin) {
            alert("not login")
            return
        }
        items.splice(index, 1)
        // copy items then the address of items change, react will render app again
        setItems([...items])
        console.log("========")
        console.log(items)
    }

    const showCompleteItem = () => {
        if (!isLogin) {
            alert("not login")
            return
        }
        const newItems = items.map((item) => {
            if (item.isComplete) {
                item.isHidden = false
                return item
            } else {
                item.isHidden = true
                return item
            }
        })
        setItems(newItems)
    }


    const handleCompleteItem = (index) => {
        if (!isLogin) {
            alert("not login")
            return
        }
        const item = items[index];
        const newItem = {content: item.content, isActive: item.isActive, isComplete: true, isHidden: item.isHidden}
        items[index] = newItem
        // copy items then the address of items change, react will render app again
        setItems([...items])
        console.log("-------")
        console.log(items)
    }

    const showAllItem = () => {
        if (!isLogin) {
            alert("not login")
            return
        }
        const newItems = items.map((item) => {
            item.isHidden = false
            return item
        })
        setItems(newItems)
    }

    const showActiveItem = () => {
        if (!isLogin) {
            alert("not login")
            return
        }
        const newItems = items.map((item) => {
            if (item.isComplete) {
                item.isHidden = true
                return item
            } else {
                item.isHidden = false
                return item
            }
        })
        setItems(newItems)
    }

    const clearCompleteItem = () => {
        if (!isLogin) {
            alert("not login")
            return
        }
        const newItems = items.filter(function (item) {
            return item.isComplete === false
        })
        setItems(newItems)
    }

    const clearAllItem = () => {
            setItems([])
        }

    const onTogglelogin = (isLogin) => {
        setIsLogin(isLogin)
    }

    return (
        <div className="todo-app" align="center">
            <div>
                <Radio color="primary" checked={isLogin}/>
            </div>
            <div className={style.todoInput}>
                <TodoInput onSubmit={handleSubmitContent}/>
            </div>
            <div className={style.todoList}>
                <TodoList items={items}
                          deleteItem={handleDeleteItem}
                          completeItem={handleCompleteItem}
                          isLogin={isLogin}
                          clearAllItem={clearAllItem}
                />
            </div>
            <div className={style.todoFoot}>
                <TodoFoot items={items}
                          showComplete={showCompleteItem}
                          showAll={showAllItem}
                          showActive={showActiveItem}
                          clearComplete={clearCompleteItem}>
                </TodoFoot>
            </div>
            <div>
                <LoginButton name="login" togglelogin={onTogglelogin}/>
                <LogoutButton name="logout" togglelogin={onTogglelogin}/>
            </div>
        </div>

    )
}

export default TodoApp