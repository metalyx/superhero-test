import React, { useReducer } from "react";
import CreateHero from "./components/CreateHero";
import ShowHero from "./components/ShowHero";
import { reducer, heroInitialState } from "./store/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, heroInitialState);

  return (
    <div className="App">
      <CreateHero state={state} dispatch={dispatch} />
      <ShowHero state={state} />
    </div>
  );
}

export default App;
