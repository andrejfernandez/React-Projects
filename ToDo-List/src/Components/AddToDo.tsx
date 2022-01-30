import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddToDoProps } from "../Data/Types";

const AddTodo = ({ task, handleChange, handleSubmit }: AddToDoProps) => (
  <div className="text-center mt-4 mb-4 w-full ">
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-11/12 ml-auto mr-auto"
    >
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        className="bg-gray-200 p-3 mr-3 rounded-lg w-11/12 text-xl ml-auto"
      />
      <button
        type="submit"
        aria-label="Add ToDo"
        className="bg-green-500 m-1 p-3 rounded-xl mr-auto"
      >
        <FontAwesomeIcon icon={faPlus} color="white" className="fa-lg" />
      </button>
    </form>
  </div>
);

export default AddTodo;
