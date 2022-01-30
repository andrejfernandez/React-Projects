import { ToDoProps } from "../Data/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Row = ({
  toDo: { id, task, isCompleted },
  handleDelete,
  handleCheck,
}: ToDoProps) => (
  <div
    className={`Row flex w-11/12 p-1 ml-auto mr-auto mt-4 mb-4 justify-between items-center rounded-xl ${
      isCompleted ? "bg-gray-400" : "bg-gray-300"
    }`}
  >
    <p
      className={`TaskText ml-2  text-xl font-medium ${
        isCompleted ? "text-white line-through" : "text-gray-700"
      }`}
    >
      {task}
    </p>

    <div className="Actions flex justify-between items-center">
      <input
        className="Checkbox forms-checkbox h-8 w-8 mr-2"
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheck(id)}
      />
      <button
        className="DeleteButton bg-red-500 text-white m-1 p-3 rounded-xl hover:bg-red-600"
        aria-label="Delete"
        onClick={() => handleDelete(id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} className="fa-lg " color="white" />
      </button>
    </div>
  </div>
);

export default Row;
