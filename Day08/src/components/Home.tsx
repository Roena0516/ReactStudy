import { useState } from "react";
import Router from "../Router";
import "../styles.css";
import Rooms from "../Rooms";
import Card from "./Card";

interface Room {
    key: number;
    name: string;
    location: string;
    totalGuest: string;
    rating: string;
    numberOfRating: string;
    price: string;
    image: string;
  }

export default function Home() {
    const [rooms, setRooms] = useState<Room[]>(Rooms);

    return (
        <div>
            <Router />
            <div id="wrapper">
                {
                    rooms.map((room) => {
                        return (
                            <Card name={room.name} image={room.image} key={room.key} />
                        )
                    })
                }
            </div>
        </div>
    );
}