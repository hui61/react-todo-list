import * as React from "react";

function withLogButton (Button) {
  const action = () => {
    if (this.props.name === "login") {
      this.props.togglelogin(true);
      alert("login");
    } else if (this.props.name === "logout") {
      this.props.togglelogin(false);
      alert("logout");
    }
  };

  return class withLogButton extends React.Component {
    render () {
      return <Button onClick={action} {...this.props} />;
    }
  };
}

export default withLogButton;
