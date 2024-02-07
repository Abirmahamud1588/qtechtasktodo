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
              className="mr-2 py-1 px-2 border border-gray-300 rounded-md flex-grow"
            />
            <select className="py-1 px-2 border border-gray-300 rounded-md">
              {Object.keys(priorities).map((priority) => (
                <option key={priority} value={priority}>
                  {priorities[priority].label}
                </option>
              ))}
            </select>
            <button className="bg-blue-500 text-white py-1 px-4 rounded-md ml-2 hover:bg-blue-600">
              Add Task
            </button>
          </div>
          <p className="mb-2">Total Tasks: </p>
          <p>Completed Tasks: </p>
        </div>
      </div>
    </div>
  );
};

export default App;
