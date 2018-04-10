import { REMOVE_TOPIC_IMAGES } from './types'

export default function removeTopicImages(imageName) {
  return dispatch => {
    dispatch(removeTopicImagesAsync(imageName));
  }
}

function removeTopicImagesAsync(imageName){
  return {
    type: REMOVE_TOPIC_IMAGES,
    payload: imageName
  }
}
