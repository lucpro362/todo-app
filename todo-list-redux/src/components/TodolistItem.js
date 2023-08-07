import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAction } from '../redux/action';

export default function TodoListItem(props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteTodoAction(props.todo.id));
  };

  return (
    <div>
      <h4>{props.todo.text}</h4>
      <button className='btn btn-danger' type='button' onClick={handleRemove}>
        Remove
      </button>
      <hr />
    </div>
  );
}