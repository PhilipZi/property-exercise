import React from "react";
import Description from "./Description";
import Title from "./Title";

function Header() {
  return (
    <header>
      <Title appTitle="Das ist der Titel" />
      <Description>hello</Description>
    </header>
  );
}

export default Header;
