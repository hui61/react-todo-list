import React, { useState } from "react";
import styles from "./css/mystyle.module.css";
import PropTypes from "prop-types";

const TodoInput = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleNameChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      const item = {
        content: content,
        isActive: true,
        isComplete: false,
        isHidden: false
      };
      onSubmit(item);
    }
    setContent("");
  };

  return (
        <div data-testid = "todo-input">
            <h1 className={styles.bigBlue}>Todos</h1>
            <input value={content}
                   type="text" onChange={handleNameChange}
            />
            <button onClick={handleSubmit}>Add Item</button>
        </div>
  );
};

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoInput;
