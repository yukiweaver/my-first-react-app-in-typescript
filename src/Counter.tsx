import React, { useState } from "react";

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    // setValue(value + 1);
    setValue((prevState) => prevState + 1);
  }

  const decrement = () => {
    // setValue(value - 1);
    setValue((prevState) => prevState - 1);
  }

    return (
      <div>
        <div>value: { value }</div>
        <button onClick={ increment }>+1</button>
        <button onClick={ decrement }>-1</button>
      </div>
    );
};

export default Counter;