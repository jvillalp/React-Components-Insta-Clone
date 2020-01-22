import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.commentType.username}</span>
      {' '}
      <span className="comment">{props.commentType.text}</span>
    </div>
  );
};


export default Comment;
