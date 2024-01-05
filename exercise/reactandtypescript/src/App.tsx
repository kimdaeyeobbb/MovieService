import { RecoilRoot } from "recoil";
import RecoilTest from "./components/recoilTest";
import UseEffectTest from "./components/useEffectTest";
import UseMemoTest from "./components/useMemoTest";
import ToDo from "./components/todo";
import UseCallbackTest from "./components/useCallbackTest";

function App() {
  return (
    <>
      <h1>useEffecTest</h1>
      <UseEffectTest />
      <hr />
      <h1>recoil test</h1>
      {/* Recoil을 사용해서 상태를 공유하고 싶은 컴포넌트들의 최상위 컴포넌트에서 RecoilRoot 태그로 해당 컴포넌트들을 감싸줌 */}
      {/* 감싸진 모든 컴포넌트 및 자식 컴포넌트에서 Recoil에서 선언한 atom(상태)를 참조 및 설정하는 것이 가능해짐 */}
      <RecoilRoot>
        <RecoilTest />
      </RecoilRoot>
      <hr />
      <h1>what should i do</h1>
      <ToDo />
      <hr />
      <h1>useCallback</h1>
      <UseCallbackTest />
      <hr />
      <h1>useMemoTest</h1>
      <UseMemoTest />
    </>
  );
}

export default App;
