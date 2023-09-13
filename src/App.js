import { useState } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from './Say';
import EventPractice from "./EventPractice";

// 3.2.3 모듈 내보내기 및 불러오기
const App323 = () => {
  // 아까 만든 MyComponent 불러오기
  return <MyComponent />;
};

// 3.3.4 태그 사이의 내용을 보여주는 children
const App334 = () => {
  return <MyComponent name="Test">리액트</MyComponent>;
};

// 3.4.1 클래스형 컴포넌트의 state
const App341 = () => {
  return <Counter />;
}

// 3.4.2.2 useState 사용하기
const App3422 = () => {
  return <Say/>
}

// 3.5 state를 사용할 때의 주의 사항
const Test = () => {
  // [ bad ] 값 직접 변경 ㄴㄴ setter 통해 변경해야 함
  // 클래스형 컴포넌트에서..
  this.state.number = this.state.number + 1; 
  this.state.array = this.array.push(2); 
  this.state.object.value = 5;

  // 함수 컴포넌트에서..
  const [object, setObject] = useState({ a: 1, b: 1 }); 
  object.b = 2;


  // [ good ]
  const object2 = { a: 1, b: 2, c: 3 };
  const nextObject = { ...object2, b: 2 }; // 스프레드 문법 | 객체를 변경할 때는 이렇게 하기!(사본을 만들어서 b 값만 덮어씀)

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  let nextArray = array.concat({id: 4}); // 새 항목 추가
  nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
  nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정

  // => 리액트는 다 이런식으로 데이터를 변경한다.
}

const App = () => {
  return <EventPractice />;
}

export default App;
