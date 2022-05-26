import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeTask, updateTask } from "../reducers/tasks/tasks";

import "./TaskCard.css";

export default function TaskCard({ task }) {
  const [editedText, setEditedText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="mt-2 ">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text
            className="text-link"
            onClick={() => navigate("/task/" + task.id)}
          >
            {task.text}
          </Card.Text>
          <div className="d-flex justify-content-around ">
            {isEditing ? (
              <div className="d-flex flex-column">
                <input
                  type="text"
                  defaultValue={task.text}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <Button
                  className="mt-2"
                  variant="warning"
                  onClick={() => {
                    dispatch(
                      updateTask({
                        id: task.id,
                        text: editedText,
                        isCompleted: task.isCompleted,
                      })
                    );
                    setIsEditing(false);
                  }}
                >
                  Update
                </Button>{" "}
                <Button
                  className="mt-2"
                  variant="danger"
                  onClick={() => {
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="d-flex flex-column">
                <Button
                  className="mt-2"
                  variant="warning"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
                <Button
                  className="mt-2"
                  variant="danger"
                  onClick={() => dispatch(removeTask(task.id))}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
