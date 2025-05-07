import { useNavigate } from "react-router-dom";
import { Room } from "../Rooms";
import Router from "../Router";

export default function Card(props:any) {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="box" key={props.key}>
                <img src={props.image} className="boximage" onClick={() => {
                    navigate(`/detail/${props.room.key}`);
                }}></img>
                <p className="title">{props.name}</p>
            </div>
        </>
    )
}