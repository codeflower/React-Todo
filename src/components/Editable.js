import React, {useState} from "react";

const Editable = (todo, todos, setTodos) => {

    const [newText, setNewText] = useState(todo.text);
    const [editMode, setEditMode] = useState(false);
    const saveTodo = () => {
        setTodos(
          todos.map((item) => {
              if (item.id === todo.id) {
                return {
                    ...item, text: newText
                }
              }
              return item;
          })
        )        
        setEditMode(false)
    }

    const setTextHandler = () => {
        setEditMode(true)
        // setTodoText(text)
      };

    return (
        
        <div>
            {console.log(todo.text)}
            {(editMode)
                ? (<div className="todo-input-wrapper">
                        <input
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            onBlur={(e) => saveTodo()}
                            type="text"
                            className="todo-item-input"
                        />
                        <button className="todo-item-input-button" onClick={saveTodo}>OK</button>
                    </div>
            
                    )
                : (<li onDoubleClick={setTextHandler} className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>)
                
            }

        </div>
            
    );
}

export default Editable;