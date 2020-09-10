const sourceUrl = "https://5f2d1c808085690016922d72.mockapi.io/api/v1/hotdog";

export const createTask = (taskData) => {
  return fetch(sourceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const fetchTasksList = () => {
  return fetch(sourceUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch");
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${sourceUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to toggle task");
    }
  });
};

export const deleteTask = (id) => {
  return fetch(`${sourceUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};
