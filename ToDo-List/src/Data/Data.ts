import { v4 as uuidv4 } from "uuid";

export const Data = [
  {
    id: uuidv4(),
    task: "Feed the cat",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    task: "Take out the trash",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    task: "Get groceries",
    isCompleted: false,
  },
];
