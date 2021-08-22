import {
    INC_ACTION,
    DEC_ACTION,
    RND_ACTION
  } from './const'
  
const reducer = (state = 0, action) => {
    switch(action.type) {
      case RND_ACTION:
        return state + action.payload
      case INC_ACTION:
        return state + 1
      case DEC_ACTION:
        return state - 1
      default:
        return state
    }
  }

export default reducer