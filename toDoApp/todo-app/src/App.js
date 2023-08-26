import React, { useState, useEffect } from 'react';
import './App.css';
import {NavLink,Outlet} from 'react-router-dom'

function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [isActive, setIsActive] = useState(false);

  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    // storedTasks = String(localStorage.getItem('tasks'))
    // setTasks(String(localStorage.getItem('tasks')))

  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };


  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    // const updatedTasks = tasks.filter(task => !task.completed);
    setTasks([]);
  };


  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => filter === 'active' ? !task.completed : task.completed);

  const navLinkStyles = ({isActive}) => {
    return {borderBottom: isActive ? '3px solid cornflowerblue' : ''}
  }

  
  return (
    <div className="App">
      <div className='container'>
        <h1>#todo</h1>
        <div className='menu'>
          <NavLink className='navLink' style={navLinkStyles} onClick={() => {setFilter('all') }} to='/'>All</NavLink>
          <NavLink className='navLink' style={navLinkStyles} onClick={() => {setFilter('active') }} to='/active'>Active</NavLink>
          <NavLink className='navLink' style={navLinkStyles} onClick={() => {setFilter('completed')}} to='/completed'>Completed</NavLink>
        </div>
        {/* <hr></hr> */}
        <div>
          <input
            label='add details'
            className='inputBox'
            type="text"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
          />
          <button className='addTask-btn' onClick={addTask}>Add</button>
        </div>
        <ul >
          {filteredTasks.map((task, index) => (
            <li key={index} className='taskList'>
              <div className='task-item'>
                <input
                  className='inputCheck'
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => completeTask(index)}
                />
                <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                </div>
              <button onClick={() => deleteTask(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <div className='clearCompletedTasks-btn'>
          <button onClick={clearCompletedTasks}>Delete all</button>
        </div>   
      </div>
    </div>
  );
}

export default App;
