import { useState } from "react";
import Counter from './Counter'

function App() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <Counter Counters={count}/>
      <br/>
      <button onClick={()=> setCount(count + 1)}> Counter + </button>
      <button onClick={()=> setCount(count - 1)}> Counter - </button>
       
    </div>
  );
}

export default App;
