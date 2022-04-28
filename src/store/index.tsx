import {createStore} from "redux";

const defaultState = {
  lists: [],
  currentFilter:'ASIN'
}
const reducer = (state = defaultState, action:any) => {
  switch (action.type) {
    case "SET_LIST" :
      return {...state, lists: state.lists = action.payload }
    case "SET_FILTER" :
      return {...state,currentFilter: state.currentFilter = action.payload}
    default:
      return state
  }
}

export const store = createStore(reducer);