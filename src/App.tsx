import { CountDisplay, CounterControls, CounterProvider } from "./state/counterContext";
// import { CountDisplay, CounterControls } from "./AnyComponent";

export default function App() {
  return (
    //<>
    // <CountDisplay />
    // <CounterControls />
    //</>
    <CounterProvider>
      <main>
        <h1>Context Counter</h1>
        <CountDisplay />
        <CounterControls />
      </main>
    </CounterProvider>
  );
}