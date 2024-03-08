import { Todo } from "../../utils/interface";
import "./todolists.css";
import { MdOutlineEditNote, MdDelete } from "react-icons/md";
import { useGetData } from "../../services/services";
import { useEffect } from "react";

interface Props {
  todolists: Todo[];
  settodolists: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleUpdateTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const TodoLists = ({
  todolists,
  handleUpdateTodo,
  handleDeleteTodo,
  settodolists,
}: Props) => {
  console.log(todolists);

  const { data, error, loading } = useGetData(
    "https://jsonplaceholder.typicode.com/todos"
  );
  useEffect(() => {
    if (loading) {
      console.log("Loading...");
    } else if (error) {
      console.error("Error:", error);
    } else {
      console.log("Data:", data);
      settodolists(data);
    }
  }, [data, error, loading]);
  
  return (
    <div className="todolists">
      {todolists.map((todo: Todo) => {
        return (
          <div className="todo" key={todo.id}>
            <p className="todo_title">{todo.title}</p>
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
