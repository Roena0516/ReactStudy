import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact Me</h1>
            <button onClick={() => navigate("/")}>홈으로</button>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
}

export default Contact;