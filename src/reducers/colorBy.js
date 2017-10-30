
const defaultState = {
  colorBy: "C"
}

const ColorBy = (state = defaultState, action) => {
  switch (action.type) {
  case "colorBy changed":
    return Object.assign({}, state, {
      colorBy: action.data,
    });
  default:
    return state;
  }
};

export default ColorBy;
