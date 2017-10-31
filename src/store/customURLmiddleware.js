import URI from "urijs";


const updateURLmiddleware = (store) => {
  return (next) => {
    return (action) => {
      const oldState = store.getState();
      const nextAction = next(action);
      if (action.type === 'url changed') {
        /* we don't handle pop state here - we handle it in the url reducer */
        return nextAction;
      }
      const state = store.getState();

      const uri = new URI(window.location.href);
      uri.setSearch({
        colorBy: action.data
      })

      window.history.pushState(null, null, uri.toString())

      return nextAction;
    }
  }
}

export default updateURLmiddleware
