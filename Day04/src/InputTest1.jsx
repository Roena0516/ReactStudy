import { useState } from "react";
import "./InputTest1.css"
export default function InputTest1(){
   //객체 생성하기
   let initialUser = {
        id: 0,
        name: "",
        email: "",
   };
   //2. useState이용하여 객체 반영하기

   const [user, setUser] = useState(initialUser);
  
 
   
    return (
        <div>
        <form>
            <h1> 로그인</h1>
                <li >이름
                    <input type = "text" name="name" onChange={(e) => {
                        setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                        })
                    }}/>
                </li>
                <li>이메일
                    <input type = "email" name="email" onChange={(e) => {
                        setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                        })
                    }}/>
                </li>
                {console.log(user)}
                <li>
                    <button type = "submit" action ="">확인 </button>
                    <button onClick={() => setUser(...user, initialUser)}>취소</button>
                </li>
            </form>
            {user.name &&
                <div id = "modal">
                    입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
                </div>
            }
        </div>
    );
}