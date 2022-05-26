import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../reducers/tasks/tasks";

export default function TasksPage() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function hundleAdd() {
    if (!inputText) {
      alert("Add Task First !!!");
      return;
    }
    dispatch(
      addTask({
        text: inputText,
        id: new Date().getTime(),
        isCompleted: false,
      })
    );

    setInputText("");
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
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
