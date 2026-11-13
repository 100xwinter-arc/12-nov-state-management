import {
    createContext,
    useContext,
    useState,
    type ReactNode,
  } from "react";
  
  type CounterContextValue = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
  
  export const CounterContext = createContext<CounterContextValue | null>(null);
  
  export function CounterProvider({ children }: { children: ReactNode }) {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount((current) => current + 1);
    }
  
    function decrement() {
      setCount((current) => current - 1);
    }
  
    function reset() {
      setCount(0);
    }
  
    return (
      <CounterContext.Provider
        value={{ count, increment, decrement, reset }}
      >
        {children}
      </CounterContext.Provider>
    );
  }
  
  export function useCounter() {
    const context = useContext(CounterContext);
  
    if (context === null) {
      throw new Error("useCounter must be used inside CounterProvider");
    }
  
    return context;
  }
  
  export function CountDisplay() {
    const { count } = useCounter();
    
    console.count("CountDisplay render");
  
    return <h2>Count: {count}</h2>;
  }
  
  export function CounterControls() {
    const { increment, decrement, reset } = useCounter();
  
    console.count("CounterControls render");
  
    return (
      <div>
        <button onClick={decrement}>−1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
    );
  }