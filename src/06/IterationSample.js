import React from 'react';

// 6.2 데이터 배열을 컴포넌트 배열로 변환하기
const IterationSample62 = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>); // select option도 이렇게 ㄱㄴ
  return <ul>{nameList}</ul>;
};

// 6.3 key
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li>{index}</li>); 
  return <ul>{nameList}</ul>;
};

export default IterationSample;
