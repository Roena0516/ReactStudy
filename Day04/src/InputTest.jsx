import { useState } from "react";
import "./styles.css"

export default function InputTest() {
    const [text, setText] = useState("");

    const Modal = () => {
        return (
            <div id = "modal">입력한 값은 <span style={{color : "orangered"}}>{text}</span>입니다.</div>
        );
    }

    return (
        <div className="container">
            <div className="wrapper">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button className="btn" onClick={() => setText("")}>초기화</button>
            </div>
            <hr />

            {text && <Modal />}
        </div>
    );
}