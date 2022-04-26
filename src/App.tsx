import { useState } from "react";
import CounterFunction from "./interfaces";

interface Person {
  name: string,
  age: number
}

const App = () => {
  const [counter, setCounter] = useState(0);

  const showSum = (a: number, b: number): string => `${a + b}`;

  const showPerson = ({ name, age }: Person): string => {
    return `NAME - ${name}, AGE - ${age}`;
  }

  const addToCounter: CounterFunction = () => setCounter(counter + 1);

  const subtractFromCounter: CounterFunction = () => {
    setCounter(counter - 1);
    return "hey";
  };

  return (
    <>
      <h1>Sum of 2 and 3: {showSum(2, 3)}</h1>

      <h2>Person: {showPerson({ age: 28, name: "Rafa" })}</h2>

      <button onClick={addToCounter}>ADD</button>
      <h3>{counter}</h3>
      <button onClick={subtractFromCounter}>SUBTRACT</button>

    </>
  );
}

export default App;
