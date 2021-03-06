import { GET_SPECIFIC_TOPIC } from '../actions/types'
import { START_GET_SPECIFIC_TOPIC } from '../actions/types'

const initialState = {
  data:[],
  isFetching:false
}

export default function(state=initialState, action) {
  switch (action.type){
    case START_GET_SPECIFIC_TOPIC:
      return {data:[...state.data],isFetching:true};
    case GET_SPECIFIC_TOPIC:
      return {data:[...action.payload],isFetching:false};
    default:
      return state;
  }
}
