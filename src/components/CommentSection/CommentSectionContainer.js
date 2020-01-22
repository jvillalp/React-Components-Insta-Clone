// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props);
  const [comments] = useState(props.comments);

  // const addComment = (e) => {
  //   console.log(e);
  // };
  return (
    <div>
      {props.comments.map(p => (
      <Comment commentType={p}></Comment>))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
