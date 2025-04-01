import { useState } from "react";
import "./InputTest1.css"
export default function InputTest2(){

   const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
        email: "",
   });
   const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.taget.value})
   };
  
 
   
    return (
        <div>
        <form>
            <h1> 로그인</h1>
                <li >이름
                    <input type = "text" name="name" value={name} onChange={(e) => {
                        setInputs({
                            ...inputs,
                            [e.target.name]: e.target.value, 
                        })
                    }}/>
                </li>
                <li>닉네임
                    <input type = "text" name="nickname" value={nickname} onChange={(e) => {
                        setInputs({
                            ...inputs,
                            [e.target.name]: e.target.value, 
                        })
                    }}/>
                </li>
                <li >이메일
                    <input type = "email" name="email" value={email} onChange={handleChange}/>
                </li>
                <li>
                    <button type = "submit" action ="">확인 </button>
                    <button type="reset" action="" onClick={() => {
                        setInputs({
                            name: "",
                            nickname: "",
                            email: "",
                        })
                    }}>초기화</button>
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