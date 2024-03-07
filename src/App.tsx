import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./utils/interface";
import TodoLists from "./components/TodoLists/TodoLists";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [currentItemId, setCurrentItemId] = useState<number>(0);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  // console.log(todo);

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo("");
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleUpdateTodo = (id: number) => {
    const updateTodo = todoList.find((todo) => todo.id === id);

    if (updateTodo) {
      setIsUpdate(false);
      setTodo(updateTodo.todo);
      setCurrentItemId(id);
    }
  };

  const updateList = (id: number) => {
    const updatedList = todoList.map((item) =>
      item.id === id ? { ...item, todo: todo, isDone: false } : item
    );

    setTodoList(updatedList);
    setIsUpdate(true);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedList = todoList.filter((todo) => todo.id != id);
    setTodoList(updatedList);
  };

 

  return (
    <div className="App">
      <h1 className="heading">TODO using React/TypeScript</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
        isUpdate={isUpdate}
        updateList={updateList}
        currentItemId={currentItemId}
      />
      <TodoLists
        todolists={todoList}
        settodolists={setTodoList}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
       
      />
    </div>
  );
};

export default App;
