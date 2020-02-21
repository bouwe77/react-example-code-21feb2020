import React from "react";

export default function Number() {
  const number = 45;

  return (
    <>
      <h1>{number}</h1>
      {number % 2 === 0 ? <div>Even</div> : <div>Odd</div>}
    </>
  );
}
