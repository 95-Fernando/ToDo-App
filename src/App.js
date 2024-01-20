import './App.css';
import taskLogo from "./images/icon-task.png";
import TasksList from './components/TasksList';
// import Task from "./components/Task";


function App() {
  return (
  <div className="App">
    <div className="title__container">
      <h1>Aplicación de Tareas</h1>
      <img src={taskLogo} className="logo__task" />
    </div>
    <div className="tasks__container">
      <h2>Mis Tareas</h2>
      <TasksList />
    </div>  
  </div>
  );
}

export default App;

