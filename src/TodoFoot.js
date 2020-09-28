import * as React from "react";

class TodoFoot extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.showAll}>All</button>
                <button onClick={this.showActive}>Active</button>
                <button onClick={this.showComplete}>Complete</button>
                <button onClick={this.clearComplete}>Clear Complete</button>
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