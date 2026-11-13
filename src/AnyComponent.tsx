import { useCounterStore } from "./state/useConterStore";

export function CountDisplay() {
    const count = useCounterStore((state) => state.count);
  
    console.count("CountDisplay render");
  
    return <h2>Count: {count}</h2>;
  }
  
  export function CounterControls() {
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);
  
    console.count("CounterControls render");
  
    return (
      <div>
        <button onClick={decrement}>−1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
    );
  }