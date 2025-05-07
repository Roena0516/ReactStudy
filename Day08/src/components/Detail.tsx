import { useParams } from "react-router-dom"; //1. useParams을 import
import Rooms,{Room} from "../Rooms.js";
export default function Detail() {
    const { id } = useParams<{id: string}>();
  //2. useParams()를 이용하여 파라미터로 {id} 받기
  console.log(id);

  const room = Rooms.find((room) => room.key === Number(id)); //3. rooms의 key값과 id값이 일치하는 값 저장(find 사용)

  console.log(room);

  if (!room) {
    return <div>Room not found</div>
  }
 
  return (
    <div className="container">
      <div className="box image">
        <img src={room.image} className="boximage" alt="Room" />
      </div>
      <div className="box">
        <div className="location">{room.key} </div>
        <div className="location">{room.location}에 위치</div>
        <div className="title">{room.name}</div>
        <hr />
        <div className="guest">최대인원{room.numberOfRating} 명</div>
        <div className="rating">
          평점: {room.rating}{" "}
          <span className="visits">({room.totalGuest})</span>
        </div>
        <div className="price">
          {room.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
}