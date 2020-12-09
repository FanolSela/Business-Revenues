import React, { useState } from 'react';
import './CommentSubmit.css'

const CommentSubmit = (props) => {
  
  const { handleSubmit } = props;
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('')

  return (
    <div>
      <div className="comment-header">
        <div className="comment-body">
          <input name="comment" className="comment-form" placeholder="Add a comment"
            onChange={event => setComment(event.target.value)} value={comment}>
          </input>
          <input name="author" className="comment-author" placeholder="author" onChange={event => setAuthor(event.target.value)} value={author}>
          </input>
        </div>
      </div>
    <div>
          <button className="comment-button" onClick={event => {
            handleSubmit({
            comment, 
            author,
            });
            setComment('');
          }}>Comment</button>
    </div>
  </div>
  );
};

export default CommentSubmit;