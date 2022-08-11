import * as React from "react";

// eslint-disable-next-line react/display-name
const withLogButton = (Button) => (props) => {
  const action = () => {
    // eslint-disable-next-line react/prop-types
    if (props.name === "login") {
      // eslint-disable-next-line react/prop-types
      props.togglelogin(true);
      alert("login");
      // eslint-disable-next-line react/prop-types
    } else if (props.name === "logout") {
      // eslint-disable-next-line react/prop-types
      props.togglelogin(false);
      alert("logout");
    }
  };

  return <Button onClick={action} {...props} />;
};

export default withLogButton;
