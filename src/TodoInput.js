import React from "react";

class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            content: ""
        }
    }

    handleNameChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        debugger
        if (this.props.onSubmit) {
            const {content} = this.state
            this.props.onSubmit({content})
        }
        this.setState({content:""})
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <input value={this.state.content}
                       type="text" onChange={this.handleNameChange.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        );
    }
}

export default TodoInput