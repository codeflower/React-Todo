import React, { useState } from "react";
import Editable from "./Editable";

const Todo = ({ todo, todos, setTodos}) => {

    const [newText, setNewText] = useState(todo.text);

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

    return (
        <div className="todo">
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <Editable 
                newText={newText}
                setNewText={setNewText}
                setTodos={setTodos}
                todos={todos}
                todo={todo}
            />
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;