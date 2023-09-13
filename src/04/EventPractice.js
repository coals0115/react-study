import { Component, useState } from "react";

// 4.2.2 onChange 이벤트 핸들링하기
class EventPractice422 extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    onChange={
                        (e) => {
                            // e 객체는 SyntheticEvent로 진짜 이벤트(브라우저의 네이티브 이벤트)를 감싸는 객체
                            // SyntheticEvent를 네이티브 이벤트와 달라 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다.
                            // console.log(e); 
                            console.log(e.target.value);
                        }
                    }
                />
            </div>
        );
    }
}

// 4.2.2.2 state에 input 값 담기
class EventPractice4222 extends Component {
    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
            </div>
        );
    }
}

// 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정
class EventPractice4223 extends Component {
    state = {
        message: ''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}

// 4.2.3 임의 메서드 만들기
class EventPractice423 extends Component {
    state = {
        message: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

// 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
// 생성자를 안 써도 돼서 이전 예제보다 훨씬 깔끔
class EventPractice4232 extends Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

const name = 'variantKey';
const object = {
    [name]: 'value'
};
// { 'variantKey': 'value' }

// 4.2.4 input 여러 개 다루기
class EventPractice424 extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            // 핵심!
            // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

// 4.2.5 onKeyPress 이벤트 핸들링
class EventPractice425 extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

// 4.3 함수 컴포넌트로 구현해 보기
const EventPractice43 = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    // 인풋의 개수가 많아진다면 e.target.name을 활용하는 게 좋다.
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={username}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );

}

// 4.3 form 객체활용
const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form; // 구조분해
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );

}

export default EventPractice;