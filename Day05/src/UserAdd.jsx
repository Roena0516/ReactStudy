import {useRef, useState} from "react";
import "./styles.css";

const User = ({user, onDelete}) => { //props로 객체를 받는 경우 {객체명}
     const {id, email, name} = user;
    return (
      <div>
        <span>{id} </span>
        <span>{name} </span>
        <span>{email}</span>
        <button onClick ={() => onDelete(id)}>삭제</button>  
      </div>
    );
}
 
export default function UserAdd(){
  const [inputs, setInputs] =useState({
    name : '',
    email : '',
});
    const [users, setUsers] = useState([
        {
          id: 1,
          name: '강민지',
          email: 'strongminji@gmail.com'
        },
        {
          id: 2,
          name: '정소울',
          email: 'soulright@bssm.hs.kr'
        },
        {
          id: 3,
          name: '이승현',
          email: 'victorynow@example.com'
        }
      ]);

  
   const {name, email} = inputs;
   const nextId = useRef(3);

   const onChange =(e)=>{ //input에 반영될 내용 수정
        const ename = e.target.name;
        const evalue = e.target.value;

        setInputs({
            ...inputs,
            [ename]: evalue
        })
 };
    const onCreate =()=>{
        //배열 복사하고 요소 추가
        nextId.current += 1;
        setUsers([
            ...users,
            {
                id: nextId.current,
                name: name,
                email: email
            }
        ])
    }
    
    const onDelete = (id) => {
        setUsers(users.filter((item) => item.id != id))
    }

     return (
        <div>  
        <input name = "name" onChange={onChange} value={name} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>  
        {
            users.map(
                (user) => {return <User user = {user} onDelete = {onDelete}/>}
            )
        }
        </div>
        );
       
  }
