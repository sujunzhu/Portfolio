import { ADD_TOPIC_IMAGE } from '../actions/types'
import { START_GET_TOPIC_IMAGES } from '../actions/types'
import { GET_TOPIC_IMAGES } from '../actions/types'
import { REMOVE_TOPIC_IMAGES } from '../actions/types'

const initialState = {
  data:[],
  isFetching: false
}

export default function(state=initialState, action) {
  switch (action.type){
    case START_GET_TOPIC_IMAGES:
      return {data:[...state.data],isFetching: true};
    case ADD_TOPIC_IMAGE:
      return {data:[action.payload,...state],isFetching: false};
    case GET_TOPIC_IMAGES:
      return {data:[...action.payload],isFetching: false};
    case REMOVE_TOPIC_IMAGES:
      return {data:state.filter(image => image.url !== action.payload),isFetching: false};
    default:
      return state;
  }
}
