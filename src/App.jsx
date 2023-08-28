import { useEffect, useRef, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
inputRef.current.focus();
  }, [inputRef])//interpret: vom executa o functie atunci cand inputRef se modifica. Din start functia nu va fi executata deoarece inutReff e null, insa cand el vine in return, iar acolo input are atributul ref, valoarea acestuia se va modifica si functia din useEffect se va executa

  useEffect(() => {
    document.title = 'Clicked' + count + 'times!'
  }, [count]);

  useEffect(() => {
    console.log('component rendered');
  })
  return (
    <div>
      <input ref = {inputRef} type="number" placeholder="Initial value" onInput={(event) => setCount(parseInt(event.target.value))} />
      <p>Value is: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
