import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
export default function TaskCard({
  task,
  hundleDelete,
  hundleUpdate,
  setEditedText,
}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="mt-2 ">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{task.text}</Card.Text>
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
                    hundleUpdate(task.id);
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
                  onClick={() => hundleDelete(task.id)}
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
