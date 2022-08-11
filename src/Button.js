import * as React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render () {
    return <button {...this.props}>{this.props.name}</button>;
  }
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  togglelogin: PropTypes.func.isRequired
};
export default Button;
