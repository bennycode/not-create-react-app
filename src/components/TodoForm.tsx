import React, {useState, useEffect, useRef} from 'react';
import UUID from 'uuidjs';

interface Props extends React.HTMLProps<HTMLFormElement> {
  edit?: TodoDraft;
  addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<Props> = props => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    props.addTodo({
      id: UUID.genV4().toString(),
      isDone: false,
      text: input,
    });

    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-form"
    >
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button
            onClick={handleSubmit}
            className="todo-button edit"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="todo-button"
          >
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
