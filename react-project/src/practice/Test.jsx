import React, { useState } from "react";

function Test() {
  const [name, setName] = useState("Palak");

  const updateName = () => {
    setName("Naina");
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default Test;

