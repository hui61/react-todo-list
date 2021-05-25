import React, {useState} from "react";
import styles from "./css/mystyle.module.css"

const TodoInput = ({onSubmit}) => {


    const [content, setContent] = useState("");

    const handleNameChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = () => {
        if (onSubmit) {
            const item = {
                content: content,
                isActive: true,
                isComplete: false,
                isHidden: false
            }
            onSubmit(item)
        }
        setContent("")
    }

    return (
        <div>
            <h1 className={styles.bigBlue}>Todos</h1>
            <input value={content}
                   type="text" onChange={handleNameChange}
            />
            <button onClick={handleSubmit}>Add Item</button>
        </div>
    );
}

export default TodoInput