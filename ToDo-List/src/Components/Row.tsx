import { ToDoProps } from "../Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Row = ({
  toDo: { id, task, isCompleted },
  handleDelete,
  handleCheck,
}: ToDoProps) => (
  <div className="Row bg-gray-100 flex ml-96 mr-96 mt-4 mb-4 p-2 rounded-lg justify-center">
    <p className="TaskText m-2 p-2">{task}</p>
    <div className="Actions">
      <input
        className="Checkbox"
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheck(id)}
      />
      <button
        className="DeleteButton bg-red-500 text-white m-2 p-3 rounded-xl "
        aria-label="Delete"
        onClick={() => handleDelete(id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} className="fa-lg" color="white" />
      </button>
    </div>
  </div>
);

export default Row;
