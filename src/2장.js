import { Fragment } from "react";
import "./App.css";

// 2.4.1) 감싸인 요소
function App241() {
  // 1. div로 감까지 않아서 에러 발생
  // return (
  //   <h1>리액트</h1>
  //   <h2>동작 안함</h2>
  // );

  // 2. OK
  // return (
  //   <div>
  //     <h1>ㅎㅇ</h1>
  //     <h2>으아아아</h2>
  //   </div>
  // );

  // 3. div 싫으면 Fragment 쓰기
  // return (
  //   <Fragment>
  //     <h1>ㅎㅇ</h1>
  //     <h2>으아아아</h2>
  //   </Fragment>
  // );

  // 4. 빈태그로 감싸기
  return (
    <>
      <h1>ㅎㅇ</h1>
      <h2>으아아아</h2>
    </>
  );
}

// 2.4.2) 자바스크립트 표현
function App242() {
  const name = "리액트";
  return (
    <>
      <h1>{name} 안녕!</h1> // 자스 표현식 쓰려면 코드 {}로 감싸면 됨
      <h2>하이요</h2>
    </>
  );
}

// 2.4.3 if문 대신 조건부 연산자
function App243() {
  const name = "리액트3";
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}

// 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

// 1번
function App2441() {
  const name = "리액트";
  return <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null} </div>;
}

// 2번 : 1번보다 더 짧은 코드로 가능
function App2442() {
  const name = "뤼액트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}

// 2.4.6 인라인 스타일링 | 자스에서는 - 사용 ㄴㄴ(뺄셈으로 인식됨) 카멜 케이스로 해야 함
function App246() {
  const name = "리액트";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
  };

  return <div style={style}>{name}</div>;
}

// 2.4.7 class 대신 className (class가 예약어라 className 써야 함)
function App() {
  const name = "리액트";

  return <div className="react">{name}</div>;
}

// 2.4.8 꼭 닫아야 하는 태그
// html에서 input 태그는 안 닫아도 동작 잘했지만 리액트(jsx)에서는 태그를 꼭 닫아야 한다. (싱글태그도 꼭 닫아줘야 함)

export default App;
