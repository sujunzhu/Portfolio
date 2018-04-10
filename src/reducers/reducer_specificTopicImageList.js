import { GET_SPECIFIC_TOPIC } from '../actions/types'

const initialState = []

export default function(state=initialState, action) {
  switch (action.type){
    case GET_SPECIFIC_TOPIC:
      return action.payload;
    default:
      return state;
  }
}
