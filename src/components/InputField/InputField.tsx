import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  isUpdate: boolean;
  updateList: (id: number) => void;
  currentItemId: number;
}

const InputField = ({
  todo,
  setTodo,
  handleSubmit,
  isUpdate,
  updateList,
  currentItemId,
}: Props) => {
  return (
    <form className="input_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter todo here ..."
        className="input_box"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      {isUpdate && (
        <button type="submit" className="submit_btn">
          Add
        </button>
      )}

      {!isUpdate && (
        <button
          type="button"
          onClick={() => updateList(currentItemId)}
          className="submit_btn"
        >
          UPD
        </button>
      )}
    </form>
  );
};

export default InputField;
