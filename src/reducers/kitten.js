import * as types from "../actions";

const kittenReducer = (state = {
  radius: 30,
  color: "blue"
}, action) => {
  switch (action.type) {
  case "KITTEN":
    return Object.assign({}, state, {
      radius: state.radius + 2
    });
  default:
    return state;
  }
};

export default kittenReducer;
