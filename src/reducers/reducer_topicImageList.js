import { ADD_TOPIC_IMAGE } from '../actions/types'
import { GET_TOPIC_IMAGES } from '../actions/types'
import { REMOVE_TOPIC_IMAGES } from '../actions/types'

const initialState = []

export default function(state=initialState, action) {
  switch (action.type){
    case ADD_TOPIC_IMAGE:
      return [action.payload,...state];
    case GET_TOPIC_IMAGES:
      return action.payload;
    case REMOVE_TOPIC_IMAGES:
      return state.filter(image => image.url !== action.payload)
    default:
      return state;
  }
}
