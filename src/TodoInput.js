import React from "react";
import styles from "./css/mystyle.module.css"

class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            content: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = () => {
        if (this.props.onSubmit) {
            const item = {
                content: this.state.content,
                isActive: true,
                isComplete: false,
                isHidden:false
            }
            this.props.onSubmit(item)
        }
        this.setState({content: ""})
    }

    render() {
        return (
            <div>
                <h1 className={styles.bigBlue}>Todos</h1>
                <input value={this.state.content}
                       type="text" onChange={this.handleNameChange}
                />
                <button onClick={this.handleSubmit}>Add Item</button>
            </div>
        );
    }
}

export default TodoInput