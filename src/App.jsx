import { useState } from "react";

const GivenTasks = [
  { id: 1, title: "cricket", status: "incomplete", priority: "low" },
  { id: 2, title: "cricket 2", status: "incomplete", priority: "medium" },
  { id: 3, title: "cricket  3", status: "completed", priority: "high" },
];
const priorities = {
  low: { color: "red", label: "Low" },
  medium: { color: "yellow", label: "Medium" },
  high: { color: "green", label: "High" },
};

const App = () => {
  const [tasks, setTasks] = useState(GivenTasks);
  const [totalTasks, setTotalTasks] = useState(GivenTasks.length);
  const [newtaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("low");

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [completedTasks, setCompletedTasks] = useState(
    GivenTasks.filter((task) => task.status === "completed").length
  );
  const handleAddedTask = () => {
    if (newtaskTitle.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        title: newtaskTitle,
        status: "incomplete",
        priority: newTaskPriority,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setTotalTasks(totalTasks + 1);
    }
  };

  const handleEditClick = (id, title) => {
    setEditingTaskId(id);
    setEditedTaskTitle(title);
  };

  const handleEditTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: editedTaskTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };
  return (
    <div>
      <div className="App min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">Todo List</h1>

        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
          <p className="mb-2">Enter your task:</p>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter task"
              value={newtaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="mr-2 py-1 px-2 border border-gray-300 rounded-md flex-grow"
            />
            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
              className="py-1 px-2 border border-gray-300 rounded-md"
            >
              {Object.keys(priorities).map((priority) => (
                <option key={priority} value={priority}>
                  {priorities[priority].label}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddedTask}
              className="bg-blue-500 text-white py-1 px-4 rounded-md ml-2 hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
          <p className="mb-2">Total Tasks: {totalTasks}</p>
          <p>Completed Tasks: {completedTasks}</p>
        </div>

        <ul className="mt-4 w-full max-w-md">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-4 rounded-md shadow-md mb-2 flex justify-between items-center"
            >
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editedTaskTitle}
                  onChange={(e) => setEditedTaskTitle(e.target.value)}
                  className="mr-2 py-1 px-2 border border-gray-300 rounded-md flex-grow"
                />
              ) : (
                <span
                  className="flex-grow font-bold "
                  style={{
                    color: priorities[task.priority].color,
                    textDecoration:
                      task.status === "completed" ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>
              )}
              <div>
                {editingTaskId === task.id ? (
                  <button
                    onClick={() => handleEditTask(task.id)}
                    className="bg-blue-600 text-white py-1 px-4 rounded-md mr-2 hover:bg-blue-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(task.id, task.title)}
                    className="bg-blue-600 text-white py-1 px-4 rounded-md mr-2 hover:bg-blue-700"
                  >
                    Edit
                  </button>
                )}
                <button
                  className={`py-1 px-4 rounded-md mr-2 ${
                    task.status === "completed"
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
                >
                  {task.status === "completed" ? "Completed" : "Incomplete"}
                </button>
                <button className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
