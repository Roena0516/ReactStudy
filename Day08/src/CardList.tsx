import Rooms, { Room } from "./Rooms";
import Router from "./Router";
import Detail from "./components/Detail";

export default function CardList() {

    return (
        <div>
            <Router />
            <h2>your rist is here!</h2>
            {
                Rooms.map((room: Room) => (
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
                ))
            }
        </div>
    )
}