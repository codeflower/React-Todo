import React, {useState} from "react";

const Editable = (props) => {
    
    const [editMode, setEditMode] = useState(false);

    const setTextHandler = () => {
      setEditMode(true)
    };
    const saveTodo = () => {
        props.setTodos(
            props.todos.map((item) => {
              if (item.id === props.todo.id) {
                return {
                    ...item, text: props.newText
                }
              }
              return item;
          })
        )        
        setEditMode(false)
    }

    return (
        <div >

            {(editMode) 
              ? (<div className="todo-input-wrapper">
                    <input 
                        value={props.newText} 
                        onChange={(e) => props.setNewText(e.target.value)} 
                        onBlur={(e) => saveTodo()} 
                        type="text" 
                        className="todo-item-input" 
                    /> 
                    <button className="todo-item-input-button" onClick={saveTodo}>
                        OK
                    </button>
                </div>
                
                )
              : (<li onDoubleClick={setTextHandler} 
                    className={`todo-item ${props.todo.completed ? "completed" : ""}`}
                >
                    {props.newText}
                </li>)
            }
            
        </div>
    );
}

export default Editable;