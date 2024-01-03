// 렌더링 성능 최적화시 사용
// 이벤트 핸들러 함수를 필요할 경우에만 생성할 수 있음

import { useCallback, useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("useCallback 사용하며 평균값 계산 중 ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a: number, b: number) => a + b);
  return sum / numbers.length;
};

const useCallbackTest = () => {
  const [numberList, setNumberList] = useState<number[]>([]);
  const [number, setNumber] = useState("");

  // useCallback: 첫번째 파라미터 - 생성하고 싶은 함수, 두번째 파라미터 - 배열 (어떤 값이 바뀌었을 때 함수를 새로 생성해야하는지 명시)
  // 함수 내부에서 상태 값에 의존해야하는 경우, 그 값을 반드시 두번째 파라미터 안에 포함시켜야 함
  // 컴포넌트가 처음 렌더링 될때만 함수 생성
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []); // 비어있는 배열을 넣으면 input 내용이 바뀌거나 새로운 항목이 추가될 때마다 함수가 새로 생성

  // useCallback: 이벤트 핸들러 함수를 필요할 때에만 생성
  // 따라서 컴포넌트가 리렌더링될때마다 생성하는 것을 방지함
  // number나 numberList가 바뀌었을 때에만 함수 생성
  const onInsert = useCallback(
    (e: React.MouseEvent) => {
      setNumberList((currentNumberList) => [
        ...currentNumberList,
        parseInt(number),
      ]);
    },
    [number, numberList]
  );

  // useMemo: 렌더링 하는 과정에서 특정 값이 바뀌었을 때에만 연산을 수행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 값을 다시 사용함
  const avg = useMemo(() => getAverage(numberList), [numberList]);
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {numberList.map((value, index) => (
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

export default useCallbackTest;
