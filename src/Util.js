import * as React from "react";

function withLogButton(Button) {

     return class extends React.Component {

         action =() =>{
             if (this.props.name==="login"){
                 this.props.togglelogin(true)
                 alert("login")
             }else if (this.props.name ==="logout"){
                 this.props.togglelogin(false)
                 alert("logout")
             }
         }

         render() {
            return <Button onClick={this.action} {...this.props} />
        }
    }
}

export default withLogButton
