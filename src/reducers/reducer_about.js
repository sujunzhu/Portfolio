import { GET_ABOUT_CONTENT } from '../actions/types'
import { START_GET_ABOUT_CONTENT } from '../actions/types'

const initialState = {
  data:[],
  isFetching:false
}

export default function(state=initialState, action) {
  switch (action.type){
    case START_GET_ABOUT_CONTENT:
      return {data:[...state.data],isFetching:true};
    case GET_ABOUT_CONTENT:
      return {data:[...action.payload],isFetching:false};
    default:
      return state;
  }
}
