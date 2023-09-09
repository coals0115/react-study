import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // state = 컴포넌트 내에서 바뀔 수 있는 값. (props는 컴포넌트 내부에서 바꿀 수 없다.)
    this.state = {
      // 객체
      number: 0, // iv 추가
    };
  }

  render() {
    const { number } = this.state; // 구조분해

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); // 불변임 setState는 setter(state라는 iv 변경)
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
