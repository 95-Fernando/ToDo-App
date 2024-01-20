import React from "react";
import IconPencil from "../images/icon-pencil.png";
import { IoAddCircle } from "react-icons/io5";
import "../css/TaskForm.css"
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';



function TaskForm(props) {

    /*Const de useState, valor inicial vacio [input]*/

    const [input, setInput] = useState("");

    /* Funcion para obtener la tarea escrita por el usuario */

    const getTask = (e) => {
        setInput(e.target.value);      
    };

    /*Funcion para enviar los datos necesarios del formulario - datos a enviar es un objeto con las props de Task.js*/

    const sendForm = (e) => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input, /*input del useState*/
            // finished: false,
            // taskCompleted: false,
            // taskDelated: false
        }

        props.onSubmit(newTask); /*Permite enviar el objeto como un props a la hora de enviar el formulario*/
        /*Importante en el componente TaskForm se requiere pasar como parametro props para que la linea 33 funcione correctamente*/
        setInput(""); /*Elimina el contenido del input de texto a la hora de enviar formulario*/
    };

    return (
        <form onSubmit={sendForm} /*Evento para enviar la tarea */>
            <fieldset>
                <legend>
                    <img src={IconPencil} alt="Pencil Icon" className="icon__pencil"/>
                </legend>
                <input 
                    className="task__input"
                    type="text"
                    name="task"
                    placeholder="Escribe una Tarea..."
                    required
                    onChange= {getTask} /*Evento para recibir la tarea*/
                    value= {input}
                />
                <button className="task__button">
                    <IoAddCircle className="icon__add"/>
                </button>
            </fieldset>
        </form>
    )
}

export default TaskForm;