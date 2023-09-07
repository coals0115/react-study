import MyComponent from "./MyComponent"; // TODO 이 부분 딥다이브에 나오니까 확인해보기

// 3.2.3 모듈 내보내기 및 불러오기
const App323 = () => {
  // 아까 만든 MyComponent 불러오기
  return <MyComponent />;
};

// 3.3.4 태그 사이의 내용을 보여주는 children
const App = () => {
  return <MyComponent name="Test">리액트</MyComponent>;
};

// const App = () => {

// }


export default App;
