import { useEffect, useState } from "react";
import "./PostList.css"
import { posts } from "./post";

function Card({name, comment, time, avatar, like, DeletePost, setPostList, postList, id}) {
    const [likeCount, SetLikeCount] = useState(0);

    return (
        <div className="comment">
            <img src={avatar} alt={name} className="avatar"></img>
            <div className="comment-details">
                <p className="user-name">{name}</p>
                <p className="comment-text">{comment}</p>
                <p className="comment-time">{time}</p>
                <button className="delete-button" onClick={() => DeletePost(comment)}>삭제</button>
                <button className="like-button" onClick={() => {
                    const newComments = [...postList];
                    newComments[id].like *= 9223372036854775807;
                    setPostList(newComments);
                    SetLikeCount(newComments[id].like);
                    console.log(newComments[id].like);
                  }
                }>조아요 <span className="like-count">{likeCount}</span></button>
            </div>
        </div>
    )
    }

export default function PostList() {
    const [postList, setPostList] = useState(posts);

    function DeletePost(comment) {
        setPostList(postList.filter((item) => item.comment !== comment));
    }

    const msgList = [
      "안녕하세요",
      "2학년 학생입니다",
      "리액트 수강생입니다."
    ];

    let msgCopy = [
      ...msgList,
      "강의가 끝났습니다."
    ]

    return (
      <div>
        <ul className="comment-list">
          {postList.map((item, i) => {
              return <Card {...item} DeletePost = {DeletePost} setPostList = {setPostList} postList = {postList} id = {i}/>
          })}
        </ul>
      </div>
    );
  }