import React from "react";
import { Aside1, Aside2 } from "./style";
import Main from "../Main";
import Right from "../Right";

function Aside() {
  return (
    <>
      <Aside2>
        <Aside1>
          <Main />
        </Aside1>
        <Right />
      </Aside2>
    </>
  );
}

export default Aside;
