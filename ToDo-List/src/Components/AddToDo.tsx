import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddToDoProps } from "../Types";

const AddTodo = ({ task, handleChange, handleSubmit }: AddToDoProps) => (
  <div className="text-center mt-4">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        className="bg-gray-200 p-3 mr-3 rounded-lg w-96"
      />
      <button
        type="submit"
        aria-label="Add ToDo"
        className="bg-green-500 p-3 rounded-lg"
      >
        <FontAwesomeIcon icon={faPlus} color="white" className="fa-lg" />
      </button>
    </form>
  </div>
);

export default AddTodo;
