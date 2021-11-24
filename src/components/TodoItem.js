import React, { useCallback } from "react";
import PropTypes from "prop-types";

const TodoItem = React.memo(({ done, title, id, doneTodo }) => {
	
	const handleDoneClick = useCallback(() => {
		doneTodo(id)
	}, [doneTodo, id])
	
	if (done) return null

  return (
    <div class="row">
      <div class="card blue-grey ">
        <div class="card-content white-text">
          <span class="card-title">{title}</span>
        </div>
        <div class="card-action">
          <button onClick={handleDoneClick} className="waves-effect waves-light btn">DONE</button>
        </div>
      </div>
    </div>
  );
});

TodoItem.propTypes = {
  done: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
  doneTodo: PropTypes.func,
};

export default TodoItem;
