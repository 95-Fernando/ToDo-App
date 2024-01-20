import React from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";



function Task({id, text, finished, taskCompleted, taskDelated, taskEdited}) {
    return (
        
        <div className={finished ? "task__container task__finished" : "task__container"}>
            <div className="text__container" onClick={() => taskCompleted(id)}>
                {text}
            </div>
            <div className="icons__container" onClick={() => taskDelated(id)}>
                <CgCloseO   className="close__icon" size={20}/>
            </div>
        </div>
    );
}

// El componente Task contiene 1 div principal, que dentro del mismo hay 1 div para el texto y otro div para el icono de x

export default Task;