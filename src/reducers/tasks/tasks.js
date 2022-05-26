const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const tasks = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, payload] };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task) => {
          return task.id !== payload;
        }),
      };
    case "UPDATE_TASK":
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return payload;
          }
          return task;
        }),
      };

    default:
      return state;
  }
};

export default tasks;

export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const updateTask = (task) => {
  return {
    type: "UPDATE_TASK",
    payload: task,
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: id,
  };
};

// export const getTask
