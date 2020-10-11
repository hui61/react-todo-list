import logButton from "./Util";
import * as React from "react";

class LoginButton extends React.Component{
    render() {
        return <button></button>
    }
}

LoginButton = logButton(LoginButton,"login")

export default LoginButton