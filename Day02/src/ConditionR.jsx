import { useState } from "react"

export default function ConditionR() {
    const [isLogin, setLogin] = useState(false);

    const buttonStyle = {
        width:  "100px",
        height: "30px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(205, 228, 255)"
    }

    return (
        <div>
            <div style={{paddingBottom : '8px'}}>
                <button style={buttonStyle} onClick={() => setLogin(!isLogin)}>{isLogin ? "로그아웃" : "로그인"}</button>
                <span>{isLogin ? " 환영합니다" : ""}</span>
            </div>
            <hr />
            <div style={{paddingTop : '8px'}}>모두 함께 리액트 공부</div>
        </div>
        
    )
}