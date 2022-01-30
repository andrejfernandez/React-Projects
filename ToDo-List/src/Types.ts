import { FormEvent, ChangeEvent } from "react";

export type ToDo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export type ToDoProps = {
  toDo: ToDo;
  handleDelete: (id: string) => void;
  handleCheck: (id: string) => void;
};

export type AddToDoProps = {
  task: string;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};
