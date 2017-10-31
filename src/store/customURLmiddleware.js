import URI from "urijs";


const updateURLmiddleware = (store) => {
  return (next) => {
    return (action) => {
      const oldState = store.getState();
      const nextAction = next(action);
      const state = store.getState();

      console.log("action in middleware", action);
      console.log("old state", oldState);
      console.log("new state", state);

      const uri = new URI(window.location.href);
      uri.setSearch({
        colorBy: action.data
      })

      window.history.pushState(null, null, uri.toString())

    }
  }
}

export default updateURLmiddleware
