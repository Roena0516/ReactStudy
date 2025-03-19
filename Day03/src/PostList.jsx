import { useState } from "react";
import "./PostList.css"
import { posts } from "./post";

function Card({name, comment, time, avatar}) {
    const [likeCount, SetLikeCount] = useState(0);

    return (
        <div className="comment">
            <img src={avatar} alt={name} className="avatar"></img>
            <div className="comment-details">
                <p className="user-name">{name}</p>
                <p className="comment-text">{comment}</p>
                <p className="comment-time">{time}</p>
                <button className="delete-button">삭제</button>
                <button className="like-button" onClick={() => SetLikeCount(likeCount + 1)}>조아요 <span className="like-count">{likeCount}</span></button>
            </div>
        </div>
    )
}

export default function PostList() {
    

    return (
      <div>
        <ul className="comment-list">
          {posts.map((item) => {
              return <Card {...item} />
          })}
        </ul>
      </div>
    );
  }