//<AxiosTest.jsx 파일을 완성하여 제출하시오.

import React, { useState } from "react";
import axios from "axios";
//npm install axios

export default function AxiosTest() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [photos, setPhotos] = useState([]);
	/*
	 getPromise ,getAsync,getPhotos 함수를 작성하시오.

  */

    const getPromise = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments/1").then((response) => {
            setData(response.data);
        })
        .catch(() => console.log("erorr"));
    }

    const getAsync = async () => {
        try {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(res.data);
            setData2(res.data)
        }
        catch(e) {
            console.log(e.stack);
        }
    }

    const getPhotos = async () => {
        try {
            const photos = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
            );
            console.log(photos.data);
            setData(null);
            setData2(null);
            setPhotos(photos.data.filter((item) => item.id <= 10));
        }
        catch(e) {
            console.log(e.stack);
        }
    }
  return (
    <main>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={getPromise}>Promise로 불러오기</button>
           <p />
        <button onClick={getAsync}>async/await로 불러오기</button>
        <p />
        <button onClick={getPhotos}>async/await로 사진 불러오기</button>
      </div>
      {data && (
        <div>
            {data.postId} {data.email} {data.body}
        </div>
      )}
      {data2 && (
        <div>
            {data2.iď} {data2.title}
        </div>
      )}
      {photos.map((photo) => {
        return (
            <div>
                {photo}
            </div>
        )
      })}


      
    </main>
  );
}

