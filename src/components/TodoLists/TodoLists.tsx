import { Todo } from "../../utils/interface";
import "./todolists.css";
import { MdOutlineEditNote, MdDelete } from "react-icons/md";

interface Props {
  todolists: Todo[];
  settodolists: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleUpdateTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const TodoLists = ({
  todolists,
  settodolists,
  handleUpdateTodo,
  handleDeleteTodo,
}: Props) => {
  console.log(todolists);

  return (
    <div className="todolists">
      {todolists.map((todo: Todo) => {
        return (
          <div className="todo" key={todo.id}>
            <p className="todo_title">{todo.todo}</p>
            <div className="todo_icons">
              <span onClick={() => handleUpdateTodo(todo.id)}>
                <MdOutlineEditNote size={24} />
              </span>
              <span onClick={() => handleDeleteTodo(todo.id)}>
                <MdDelete size={24} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoLists;
