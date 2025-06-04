import { useState } from "react";
import Router from "../Router";
import "../styles.css";
import Rooms from "../Rooms";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import AxiosTest from "../HomeAxios";

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

export default function HomeAxios() {
    const [rooms, setRooms] = useState<Room[]>(Rooms);

    return (
        <div>
            <Router />
            <div id="wrapper">
                {
                    rooms.map((room) => {
                        return (
                            <Card name={room.name} image={room.image} room={room} key={room.key} />
                        )
                    })
                }
                <AxiosTest rooms = {rooms} setRooms = {setRooms} />
            </div>
        </div>
    );
}