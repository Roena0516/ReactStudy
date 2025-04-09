import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404 Not Found</h1>
            <button onClick={() => navigate("/")}>홈으로</button>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
}

export default NoPage;