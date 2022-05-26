import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TaskPage() {
  let { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState(null);
  // set task to the task with the id that matches the id in the url and then console.log the task
  useEffect(() => {
    setTask(tasks.find((t) => t.id === Number(id)));
  }, [tasks, id]);
  console.log(task);

  return task ? (
    <div>
      <h1> Single Task Page</h1>

      <h2> {task.text} </h2>
    </div>
  ) : (
    <h2>Lodaing...</h2>
  );
}
