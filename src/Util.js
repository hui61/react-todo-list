import * as React from "react";

function logButton(Button, name) {

     class newButton extends React.Component {

         action =() =>{
             if (name==="login"){
                 this.props.todoapp.setState({isLogin: true})
                 alert("login")
             }else if (name==="logout"){
                 this.props.todoapp.setState({isLogin: false,items:[]})
                 alert("logout")
             }
         }

         render() {
            return <button onClick={this.action}>{name}</button>
        }
    }
    return newButton
}

export default logButton
