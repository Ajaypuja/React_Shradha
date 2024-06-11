import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { task: "Sample-task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const addNewTask = () => {
    setTodos(() => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
  };
  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  const markAllDone = () => {
    setTodos((prevTodos) =>
      todos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };
  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />

      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecorationLine: "Line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
};

export default TodoList;
