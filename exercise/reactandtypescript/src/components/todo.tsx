import { SetStateAction, useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState<string[]>([]);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
  };

  /* form이 가지는 submit 이벤트의 기본 동작을 막음 */
  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");

    // toDos.push() // state는 constant이므로 직접 수정이 불가능 -> 수정하는 함수 사용

    setToDos((currentArary) => [...currentArary, toDo]);
    // 이 함수는 첫번째 인자로 현재의 state를 받아옴
    // 함수를 보낼 때 react.js는 함수의 첫번째 인자로 현재의 state를 보냄

    // console.log(toDo);
  };
  // console.log(toDos);
  return (
    <>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write what to do"
        />
        <button>add to do</button>
      </form>
    </>
  );
};

export default ToDo;
