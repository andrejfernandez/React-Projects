type ToDo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type ToDoProps = {
  todo: ToDo;
};

export const Row = ({ todo: { task, isCompleted } }: ToDoProps) => (
  <div className="Row">
    <p>{task}</p>
    <div className="Actions">
      <button aria-label="Delete" onClick={() => null}>
        X
      </button>
      <input type="checkbox" checked={isCompleted} onChange={() => null} />
    </div>
  </div>
);

export default Row;
