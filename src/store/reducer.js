export const heroInitialState = {
  name: "",
  age: 0,
  superPower: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: action.payload,
      };
    case "changeAge":
      return {
        ...state,
        age: action.payload,
      };
    case "changeSuperPower":
      return {
        ...state,
        superPower: action.payload,
      };
    default:
      throw new Error("Unexpected action type provided");
  }
}
