import * as React from "react";
import Button from '@material-ui/core/Button';

class TodoFoot extends React.Component {
    render() {
        return (
            <div>
                <Button variant="contained" size="small"  onClick={this.showAll}>All</Button>
                <Button variant="contained" size="small" color="primary" onClick={this.showActive}>Active</Button>
                <Button variant="contained" size="small" color="secondary" onClick={this.showComplete}>Completed</Button>
                <Button variant="contained" size="small" onClick={this.clearComplete}>Clear Complete</Button>
            </div>
        )
    }

    showComplete = () => {
        debugger
        if(this.props.showComplete){
            this.props.showComplete(this.props.items)
        }
    }

    showAll = () =>{
        if(this.props.showAll){
            this.props.showAll(this.props.items)
        }
    }

    showActive = () => {
        debugger
        if(this.props.showActive){
            this.props.showActive(this.props.items)
        }
    }

    clearComplete = () => {
        debugger
        if(this.props.clearComplete){
            this.props.clearComplete(this.props.items)
        }
    }
}

export default TodoFoot