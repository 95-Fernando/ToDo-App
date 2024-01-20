import React from "react";
import TaskForm from "./TaskForm";
import "../css/TasksList.css"
import { useState } from "react";
import Task from "./Task";
import "../css/Task.css";

function TasksList() {

    const [tasks, setTasks] = useState([]);
/*Funcion de agregar la tarea, esta trabaja con el obSubmit de TaskForm pasando el objeto newTask */
    const addTask = (task) => {
        /*Valida y elimina los espacios vacios */
       if(task.text.trim()) {
        task.text = task.text.trim();

        /* array  para las tareas nuevas y pasarlas al nuevo estado setTasks*/
        const updatedTasks = [task, ... tasks];
        setTasks(updatedTasks);
       }
    };

/*Funcion para eliminar tarea */
    const taskDelated = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id );
        setTasks(updatedTasks);
    };

/*Funcion para saber si una tarea es completada o no */
    const taskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                task.finished = !task.finished;
            }
            return task;
        })
        setTasks(updatedTasks);
    };

    return (
        <>
            < TaskForm 
            onSubmit={addTask} /*este onSubmit hace referencia al props de la funcion sendTask en TaskForm*//>
            <div className="tasks__list__container">
                {
                    tasks.map((task) => 
                        <Task
                            key={task.id} /*Este atributo sirve para que React identifique que tarea agregar o manejar */
                            id={task.id} /*Este props es para manejar los eventos de escucha para eliminar, editar o terminar tarea */
                            text = {task.text}
                            finished ={task.finished}
                            taskDelated = {taskDelated} /* Prop para eliminar tarea */
                            taskCompleted = {taskCompleted} /* Prop para terminar tarea */
                        />
                    )
                }
            </div>
        </>
    );
}

export default TasksList;