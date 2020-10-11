import logButton from "./Util";
import * as React from "react";

class LogoutButton extends React.Component{
    render() {
        return <button></button>
    }
}

LogoutButton = logButton(LogoutButton,"logout")

export default LogoutButton