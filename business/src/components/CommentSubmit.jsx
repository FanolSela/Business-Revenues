import React, { useState } from 'react';

const CommentSubmit = (props) => {
  
  const { handleSubmit } = props;
  const [comment, setComment] = useState('');

  return (
    <div>
      <div className="comment-header">
        <div className="comment-body">
          <div name="comment" className="comment-form" placeholder="Add a comment"
            onChange={event => setComment(event.target.value)} value={comment}>
          </div>
          <form input>

          </form>
        </div>
      </div>
    <div>
          <button className="comment-button" onClick={event => {
            handleSubmit(comment);
            setComment('');
          }}>Comment</button>
    </div>
  </div>
  );
};

export default CommentSubmit;