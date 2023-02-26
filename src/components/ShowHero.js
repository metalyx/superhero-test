function ShowHero({ state }) {
  const HeroList = (state) => {
    if (state.name !== "" && state.age !== 0 && state.superPower !== "") {
      return (
        <ul>
          <li>Name: {state.name}</li>
          <li>Age: {state.age}</li>
          <li>Superpower: {state.superPower}</li>
        </ul>
      );
    } else {
      return null;
    }
  };

  return HeroList(state);
}

export default ShowHero;
