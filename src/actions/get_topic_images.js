import { GET_TOPIC_IMAGES } from './types'
import topicImageList from '../data/topicImageList.json'

export default function getTopicImages() {
  return dispatch => {
    const topicListState = topicImageList;
    dispatch(getTopicImagesAsync(topicListState));
  }
}

function getTopicImagesAsync(topicListState){
  return {
    type: GET_TOPIC_IMAGES,
    payload: topicListState
  }
}
