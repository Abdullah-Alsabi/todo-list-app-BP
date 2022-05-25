import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { Button, InputGroup, FormControl } from "react-bootstrap";
export default function TasksPage() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [inputText, setInputText] = useState("");
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function hundleAdd() {
    if (!inputText) {
      alert("Add Task First !!!");
      return;
    }
    setTasks([
      ...tasks,
      {
        text: inputText,
        id: new Date().getTime(),
        isCompleted: false,
      },
    ]);
    setInputText("");
  }

  function hundleUpdate(id) {
    let updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        t.text = editedText;
        return t;
      }
      return t;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  function hundleDelete(id) {
    let newTasks = tasks.filter((t) => {
      if (t.id !== id) {
        return t;
      }
    });
    console.log(newTasks);
    setTasks(newTasks);
  }

  return (
    <div>
      <div className="d-flex  justify-content-center align-items-center">
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Write your task here..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <Button onClick={hundleAdd} variant="outline-success">
            Add
          </Button>
        </InputGroup>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              hundleDelete={hundleDelete}
              hundleUpdate={hundleUpdate}
              setEditedText={setEditedText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
