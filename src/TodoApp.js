import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios"
import TodoFoot from "./TodoFoot";
import style from "./css/mystyle.module.css"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Radio from "@material-ui/core/Radio";

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLogin: false
        }
    }

    handleSubmitContent = (item) => {
        if(!this.state.isLogin){
            alert("not login")
            return
        }
        this.state.items.push(item)
        this.setState({items: this.state.items})
    }

    componentDidMount() {
        // this.initData()
    }

    initData = async () => {
        const result = await axios.get('http://127.0.0.1:5000/api/items');
        if (result) {
            this.setState({items: result.data.items})
        }
    }

    handleDeleteItem = (index) => {
        if(!this.state.isLogin){
            alert("not login")
            return
        }
        this.state.items.splice(index, 1)
        this.setState({items: this.state.items})
    }

    showCompleteItem = () => {
        if(!this.state.isLogin){
            alert("not login")
            return
        }
        const newItems = this.state.items.map((item) => {
            if (item.isComplete) {
                item.isHidden = false
                return item
            } else {
                item.isHidden = true
                return item
            }
        })
        this.setState({items: newItems})
    }


    handleCompleteItem = (index) => {
        const item = this.state.items[index];
        const newItem = {content: item.content, isActive: item.isActive, isComplete: true, isHidden: item.isHidden}
        const items = this.state.items
        items[index] = newItem
        this.setState({items: items})
    }

    showAllItem = () => {
        if(!this.state.isLogin){
            alert("not login")
            return
        }
        const newItems = this.state.items.map((item) => {
            item.isHidden = false
            return item
        })
        this.setState({items: newItems})
    }

    showActiveItem = () => {
        if(!this.state.isLogin){
            alert("not login")
            return
        }
        const newItems = this.state.items.map((item) => {
            if (item.isComplete) {
                item.isHidden = true
                return item
            } else {
                item.isHidden = false
                return item
            }
        })
        this.setState({items: newItems})
    }

    clearCompleteItem = () =>{
        if(!this.state.isLogin){
            alert("not login")
            return
        }
        const newItems = this.state.items.filter(function(item){
            return item.isComplete === false
        })
        this.setState({items: newItems})
    }


    render() {
        return (
            <div className="todo-app" align="center">
                <div>
                    <Radio color="primary" checked={this.state.isLogin}/>
                </div>
                <div className={style.todoInput}>
                    <TodoInput onSubmit={this.handleSubmitContent}/>
                </div>
                <div className={style.todoList}>
                    <TodoList items={this.state.items} deleteItem={this.handleDeleteItem}
                              completeItem={this.handleCompleteItem}/>
                </div>
                <div className={style.todoFoot}>
                    <TodoFoot items={this.state.items}
                              showComplete={this.showCompleteItem}
                              showAll={this.showAllItem}
                              showActive={this.showActiveItem}
                              clearComplete={this.clearCompleteItem}>
                    </TodoFoot>
                </div>
                <div>
                    <LoginButton todoapp={this}/>
                    <LogoutButton todoapp={this}/>
                </div>
            </div>

        )
    }
}

export default TodoApp