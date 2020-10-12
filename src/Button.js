import * as React from "react";

class Button extends React.Component{
    render() {
        return <button {...this.props}>{this.props.name}</button>
    }
}

export default Button