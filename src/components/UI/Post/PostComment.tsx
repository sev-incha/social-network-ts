import React from "react";
import { Icon } from "../Icon/Icon";

interface PostCommentProps {
  commentText: string
}

export const PostComment = ({ commentText }: PostCommentProps) => {
  return (
    <div>
      <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
      <div className="comment__description">
        <span className="comment__owner">
          Карина Савина
        </span>
        <p className="comment__text">{commentText}</p>
        <span className="reply">
          Ответить
        </span>
      </div>
      <span className="date">25 марта</span>
      <Icon name="heart" width="23" height="23" />
    </div>
  )
}