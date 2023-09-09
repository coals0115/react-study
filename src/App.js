import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from './Say';

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
const App = () => {
  return <Say/>
}





export default App;
