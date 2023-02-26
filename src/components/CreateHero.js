import React from "react";
import Input from "./Input";
import "./CreateHero.css";

function CreateHero({ state, dispatch }) {
  return (
    <section className="container">
      <form>
        <Input
          value={state.name}
          label="Name"
          dataActionType="changeName"
          type="text"
          dispatch={dispatch}
        />
        <Input
          value={state.age}
          label="Age"
          dataActionType="changeAge"
          type="number"
          dispatch={dispatch}
        />
        <Input
          value={state.superPower}
          label="Superpower"
          dataActionType="changeSuperPower"
          type="text"
          dispatch={dispatch}
        />
      </form>
    </section>
  );
}

export default CreateHero;
