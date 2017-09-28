import * as types from "../actions";

const initialState = {
  radius: 30,
  color: "blue",
  x: 200,
  y: 200,
}

const kittenReducer = (state = initialState, action) => {
  switch (action.type) {
  case "KITTEN":
    return Object.assign({}, state, {
      radius: state.radius + 2
    });
  case "MOVE_RIGHT":
    return Object.assign({}, state, {
      x: state.x + 20
    })
  default:
    return state;
  }
};

export default kittenReducer;
