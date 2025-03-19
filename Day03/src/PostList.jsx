import { useEffect, useState } from "react";
import "./PostList.css"
import { posts } from "./post";

function Card({name, comment, time, avatar, DeletePost}) {
    const [likeCount, SetLikeCount] = useState(0);

    return (
        <div className="comment">
            <img src={avatar} alt={name} className="avatar"></img>
            <div className="comment-details">
                <p className="user-name">{name}</p>
                <p className="comment-text">{comment}</p>
                <p className="comment-time">{time}</p>
                <button className="delete-button" onClick={() => DeletePost(comment)}>삭제</button>
                <button className="like-button" onClick={() => SetLikeCount(likeCount + 1)}>조아요 <span className="like-count">{likeCount}</span></button>
            </div>
        </div>
    )
    }

export default function PostList() {
    const [postList, setPostList] = useState(posts);

    function DeletePost(comment) {
        setPostList(postList.filter((item) => item.comment !== comment));
    }

    return (
      <div>
        <ul className="comment-list">
          {postList.map((item) => {
              return <Card {...item} DeletePost = {DeletePost}/>
          })}
        </ul>
      </div>
    );
  }