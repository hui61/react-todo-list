import * as React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

const TodoFoot = ({ showComplete,showActive ,showAll,clearComplete}) => {
    return  <div>
        <Button variant="contained" size="small"  onClick={showAll}>All</Button>
        <Button variant="contained" size="small" color="primary" onClick={showActive}>Active</Button>
        <Button variant="contained" size="small" color="secondary" onClick={showComplete}>Completed</Button>
        <Button variant="contained" size="small" onClick={clearComplete}>Clear Complete</Button>
    </div>
}

TodoFoot.propTypes = {
    showComplete:PropTypes.func.isRequired,
    showActive:PropTypes.func.isRequired,
    showAll:PropTypes.func.isRequired,
    clearComplete:PropTypes.func.isRequired
}

export default TodoFoot