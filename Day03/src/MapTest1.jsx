import React from "react";

let user = { name: "soma", age: 20 };
let { name, age } = user;
const cars = ["Ford", "BMW", "Audi"];
let foo = ["one", "two", "three"];

function Car(props) {
  return <li>I am a {props.brand}</li>;
}
function MapTest1() {
  return (
    <>
      <h1>foo 배열 출력하기</h1>
      <ul>
        {/* {작성하세요.} */}
        
      </ul>
      <h1>차고에 있는 차 목록</h1>
      <ul>
        {/*cars 배열 요소를 Car컴포넌트의 brand로 전송하여 컴포넌트 리턴 */}
        {/* { 작성하세요.} */}
      </ul>
    </>
  );
}
export default MapTest1;