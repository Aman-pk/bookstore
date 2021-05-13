import React, { useState } from "react";

const UpdatedComp = (OldComp) => {
  const NewComp = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    const decrementCount = () => {
      count>0 && setCount(count - 1);
    };

    return (
      <OldComp
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    );
  };
  return NewComp;
};

export default UpdatedComp;