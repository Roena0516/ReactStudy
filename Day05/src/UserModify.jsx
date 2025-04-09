import {useRef, useState} from "react";
import "./styles.css";

const User = ({user, onDelete, onToggle}) => { //props로 객체를 받는 경우 {객체명}
     const {id, email, name} = user;
    return (
      <tr>
        <th>{id} </th>
        <th onClick={() => onToggle(id, user)}>{name} </th>
        <th>{email}</th>
        <button onClick ={() => onDelete(id)}>삭제</button>  
      </tr>
    );
}
 
export default function UserModify(){
  const [inputs, setInputs] =useState({
    name : '',
    email : '',
});
    const [users, setUsers] = useState([
        {
          id: 1,
          name: '강민지',
          email: 'strongminji@gmail.com',
          selected:false,
        },
        {
          id: 2,
          name: '정소울',
          email: 'soulright@bssm.hs.kr',
          selected:false,
        },
        {
          id: 3,
          name: '이승현',
          email: 'victorynow@example.com',
          selected:false,
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

    const onToggle = (id, user)=>{ //2. 1)이름 클릭하면 selected속성 반전 2) input에 현재값 반영하기
      users.map((item) => {
        if (item.id == id) {
          item.selected = !item.selected;
          console.log(item.selected);
        }
      }
      )
      setUsers(
        ...users
      );
      setInputs({
        //현재 user의 이름과 이메일을 input에 보여줌.
        name: user.name,
        email: user.email
      })

      const onModify = (user,id)=>{ //3.   1)수정 버튼 누르면 input의 값으로 user수정하기 2) input clear
        
        setUsers(
         )
         setInputs({
          //input값 초기화
         })}
    }

     return (
        <div>  
        <input name = "name" onChange={onChange} value={name} placeholder = "이름을 입력" />
        <input name = "email" onChange={onChange} value = {email}  placeholder = "이메일을 입력" />
        <button onClick ={onCreate}>등록</button>  
        <table>
        <thead>
          <tr>
            <th>연번</th><th>이름</th><th>이메일</th>
            </tr>
            {
            users.map(
                (user) => {return <User user = {user} onDelete = {onDelete} onToggle={onToggle}/>}
            )
            }
        </thead>
      </table>
        </div>
        );
       
  }
