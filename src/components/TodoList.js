import React from 'react';

const TodoList = (props) => {
         return (
            <div>
              {props.task} <button >X</button>
            </div>
        );
    
}

export default TodoList;
