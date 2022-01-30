import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { Row } from "./Row";
import AddTodo from "./AddToDo";
import { ToDo } from "../Data/Types";
import { Data } from "../Data/Data";

export const List = () => {
  // State
  const [toDos, setToDos] = useState<ToDo[]>(Data);
  const [task, setTask] = useState("");

  const toDosLength = toDos.length;
  const hasToDos = toDosLength > 0;
  const remainingToDos = toDos.filter((toDo) => !toDo.isCompleted).length;

  //Handlers
  const handleAdd = (toDo: ToDo) => {
    // Adding the new ToDo to the end of the array, resetting form
    const updatedToDos = [...toDos, toDo];
    setToDos(updatedToDos);
    setTask("");
  };

  const handleChange = (e: ChangeEvent) => {
    // Setting the task state to the contents of the field
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmit = (e: FormEvent) => {
    // Creates new ToDo from task state and passes it to the add handler
    e.preventDefault();
    const toDo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };
    task && handleAdd(toDo);
  };

  const handleDelete = (id: string) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  const handleCheck = (id: string) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isCompleted: !toDo.isCompleted,
        };
      }
      return toDo;
    });

    setToDos(updatedToDos);
  };

  return (
    <div>
      <section>
        <AddTodo
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {toDos.map((toDo) => (
          <Row
            key={toDo.id}
            toDo={toDo}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
        <div className="Remaining">
          {!hasToDos && (
            <h1 className="text-center text-xl mt-8">Plan it out!</h1>
          )}

          {hasToDos && (
            <h3 className="font-roboto text-center text-xl mt-8">{`[${remainingToDos} of ${toDosLength}] remaining`}</h3>
          )}
        </div>
      </section>
    </div>
  );
};

export default List;
