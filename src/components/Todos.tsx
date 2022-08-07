import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

interface Props extends React.HTMLProps<HTMLDivElement> {
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  todos: Todo[];
  updateTodo: (id: string, updateTodo: Todo) => void;
}

const Todos: React.FC<Props> = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState<TodoDraft>({
    id: null,
    value: '',
  });

  const submitUpdate = (value: Todo) => {
    if (edit.id) {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: '',
      });
    }
  };

  if (edit.id) {
    return (
      <TodoForm
        edit={edit}
        addTodo={submitUpdate}
      />
    );
  }

  const containers = todos.map((todo: Todo, index: number) => (
    <div
      className={todo.isDone ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => {
          if (todo.id) {
            completeTodo(todo.id);
          }
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => {
            if (todo.id) {
              removeTodo(todo.id);
            }
          }}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            if (todo.id) {
              setEdit({id: todo.id, value: todo.text});
            }
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ));

  return <>${containers}</>;
};

export default Todos;
