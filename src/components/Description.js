import React from "react";

function Description(props) {
  return (
    <>
      <h3>Description:</h3>
      <p>{props.children}</p>
    </>
  );
}

export default Description;
