// 3.3.4 태그 사이의 내용을 보여주는 children
const MyComponent334 = (props) => {
  return (
    <div>
      안녕하세요 제 이름은 {props.name}입니다. <br />
      chilren 값은 {props.children}
      입니다.
    </div>
  );
};

// 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
// ES6의 구조분해 문법 사용해 더 짧은 코드 ㄱㄴ
const MyComponent = ({name, children}) => {
// const MyComponent = (props) => {
    // const { name, children } = props;
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        chilren 값은 {children}
        입니다.
      </div>
    );
  };

MyComponent.defaultProps = { // 기본 속성값
    name: '기본 이름'
};



export default MyComponent;
