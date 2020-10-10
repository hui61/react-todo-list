import * as React from "react";
import Button from '@material-ui/core/Button';

const TodoFoot = ({ showComplete,showActive ,showAll,clearComplete}) => {
    return  <div>
        <Button variant="contained" size="small"  onClick={showAll}>All</Button>
        <Button variant="contained" size="small" color="primary" onClick={showActive}>Active</Button>
        <Button variant="contained" size="small" color="secondary" onClick={showComplete}>Completed</Button>
        <Button variant="contained" size="small" onClick={clearComplete}>Clear Complete</Button>
    </div>
}

export default TodoFoot