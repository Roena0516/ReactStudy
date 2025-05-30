import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Blog Articles</h1>
            <button onClick={() => navigate("/")}>홈으로</button>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
}

export default Blogs;