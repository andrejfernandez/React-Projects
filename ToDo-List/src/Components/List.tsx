import { Row } from "./Row";
import { Data } from "../Data";

export const List = () => {
  return (
    <section>
      {Data.map((todo) => (
        <Row key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default List;
