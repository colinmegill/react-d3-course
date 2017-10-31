import URI from "urijs";

const defaultState = {
  colorBy: "C",
  colorByOptions: ["A", "B", "C"]
}

const ColorBy = (state = defaultState, action) => {
  switch (action.type) {
  case "url changed":
    const uri = new URI(action.url)
    return Object.assign({}, state, {
      colorBy: uri.search(true).colorBy
    });
  case "colorBy changed":
    return Object.assign({}, state, {
      colorBy: action.data,
    });
  default:
    return state;
  }
};

export default ColorBy;
