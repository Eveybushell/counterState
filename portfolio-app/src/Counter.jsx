import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const incrementTwice = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
    }

    const incrementAfterDelay = () => {
        setTimeout(() => {}, 3000);
        setCounter(counter + 1);
    }

    const correctlyIncrementTwice = () => {
        setCounter(previousState => {
            return previousState + 1;
        });
         setCounter(previousState => {
            return previousState + 1;
        });
    }
    return (
    <>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAfterDelay}>Increment After Delay</button>
        <button onClick={incrementTwice}>Increment Twice</button>
        <button onClick={correctlyIncrementTwice}>Correctly Increment Twice</button>
    </>
    );
}