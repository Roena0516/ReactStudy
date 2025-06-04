import { useParams, useSearchParams } from "react-router-dom"; //1. useParams을 import
import Rooms,{Room} from "../Rooms.js";
import { useState } from "react";
import { Nav } from "react-bootstrap";
export default function Detail() {
    const { id } = useParams<{id: string}>();
  //2. useParams()를 이용하여 파라미터로 {id} 받기
  console.log(id);

  const room = Rooms.find((room) => room.key === Number(id)); //3. rooms의 key값과 id값이 일치하는 값 저장(find 사용)

  const [tab, setTab] = useState(0);
  // const [theme, setTheme] = 

  console.log(room);

  if (!room) {
    return <div>Room not found</div>
  }
 
  return (
    <main>
      <div className="container">
        <div className="box image">
          <img src={room.image} className="boximage" alt="Room" />
        </div>
        <div className="box">
          <div className="location">{room.key} </div>
          <div className="location">{room.location}에 위치</div>
          <div className="title">{room.name}</div>
          <hr />
          <div className="guest">최대인원{room.numberOfRating} 명</div>
          <div className="rating">
            평점: {room.rating}{" "}
            <span className="visits">({room.totalGuest})</span>
          </div>
          <div className="price">
            {room.price} 원<span className="month">/ month</span>
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">

       <Nav.Item>

         <Nav.Link  eventKey="link0">

           상세정보

         </Nav.Link>

       </Nav.Item>

       <Nav.Item>

         <Nav.Link  eventKey="link1">

           리뷰

         </Nav.Link>

       </Nav.Item>

       <Nav.Item>

         <Nav.Link   eventKey="link2" disabled>

           상품Q&A

         </Nav.Link>

       </Nav.Item>

     </Nav>
     <TabContent tab={tab}></TabContent>
    </main>
  );
}

export const TabContent = (props: any) => {
  return (
    <div>
    {props.tab == 0 && (<div>
      <div>

         <p>

           5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을

           제공합니다.

         </p>

         <p>

           모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급

           어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.

         </p>

         <br /> 위치 :5~9층

         <br />

         룸구성 : 침실 1, 욕실 1

         <br />

         문의전화 : 02-2230-0700

       </div>
    </div>)}
    {props.tab == 1 && <div>내용1</div>}

   {props.tab == 2 && <div>내용2</div>}
  </div>
  )
}