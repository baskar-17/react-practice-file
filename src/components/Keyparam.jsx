import React, { useState } from "react";

function KeyParam(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      value1,
      value2,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Value 1:
        <input
          type="text"
          value={value1}
          onChange={(event) => setValue1(event.target.value)}
        />
      </label>
      <label>
        Value 2:
        <input
          type="text"
          value={value2}
          onChange={(event) => setValue2(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default KeyParam;
