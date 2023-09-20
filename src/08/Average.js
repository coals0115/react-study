import React, { useCallback, useMemo, useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

//   const onChange = e => { // 리렌더링 할 때마다 람다식이 새로 만들어진다. 이런 비효율을 없애려고 만든 게 useCallback
//     setNumber(e.target.value);
//   };

  // useCallback = 성능 최적화 시 사용
  /**
   * 플라이웨이트 패턴(ex. 서블릿, 스프링)
   * -> 맵으로 관리, 재사용
   * 계속 새로 생성하지 않고 한번 만들어둔 거 따로 저장해두고있다가 재사용한다.
   */
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }; 

  // avg 함수를 호출해놓은 값을 변수에 저장. 
  // 얘가 바뀔 때 람다식을 호출해서 그 결과를 저장한다. 계속 렌더링 될 때마다 호출할 필요 ㄴㄴ
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* 렌더링 될 때마다 이 값 뿌림 -> 비효율적 */}
        <b>평균값:</b> {avg} 
      </div>
    </div>
  );
};

export default Average;
