import { ADD_TOPIC_IMAGE } from './types'

export default function addTopicImage(image) {
  return dispatch => {
    dispatch(addPersonAsync(image));
  }
}

function addPersonAsync(image){
  return {
    type: ADD_TOPIC_IMAGE,
    payload: image
  }
}
