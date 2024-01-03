import React, { useEffect, useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a: number, b: number) => a + b);
  return sum / numbers.length;
};

const useMemoTest = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  // 리스트에 숫자 추가
  const onInsert = (e: React.MouseEvent) => {
    setList((currentNumberList) => [...currentNumberList, parseInt(number)]);
    setNumber("");
  };

  // useMemo: 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 값을 다시 사용함
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
        {/* <b>평균값:</b> {getAverage(list)} */}
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default useMemoTest;
