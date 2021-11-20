import React, {useState} from "react";

const Todo = ({ text, todo, todos, setTodos}) => {

    const [newText, setNewText] = useState(todo.text);
    const [editMode, setEditMode] = useState(false);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item;
            })
        );
    }
    const setTextHandler = () => {
      setEditMode(true)
      // setTodoText(text)
    };
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
    return (
        <div className="todo">
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>

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
              : (<li onDoubleClick={setTextHandler} className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>)
            }
            
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;