import React, { useEffect, useState } from "react";
interface Task {
  id: number;
  task: string;
}

const TodoList: React.FC = () => {
  const [taskList, SetTaskList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handelTaskInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    // const { name, value } = event.target;
    setNewTask(event.target.value);
  };


  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    const newTaskObj: Task = {
      id: Date.now(),
      task: newTask,
    };

    SetTaskList((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask("");
  };

  const handleDeleteTask = (id: number) => {
    if (window.confirm('Are you sure you want to delete')) {
      try {
        const data = taskList.filter((task) => task.id !== id);
        SetTaskList(data);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  }

  {/* <li key={task.id}>
            {task.task} <button onClick={() => SetTaskList(taskList.filter((t) => t.id !== task.id))}>Delete</button>
          </li>)} */}
  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Add a task" name="task" value={newTask} onChange={handelTaskInput} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {taskList.map((task) =>

          <li key={task.id}>
            {task.task} <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>)}
      </ul>
    </div>
  );
}
export default TodoList;