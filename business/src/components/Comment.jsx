import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment-container" key={props.comment.id}>
          {props.comment.fields.comment} - &nbsp;
          <em>
            {props.comment.fields.author}
        </em>
        </div>
  );
};

export default Comment;