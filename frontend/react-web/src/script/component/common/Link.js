import React from 'react';
import {
  useHistory,
} from 'react-router-dom';

function Link(props) {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push(props.to);
  }

  return (
    <a href={props.to} onClick={handleClick}>
      {props.children}
    </a>
  );
}

export default Link;
