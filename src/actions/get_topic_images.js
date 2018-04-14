import { START_GET_TOPIC_IMAGES, GET_TOPIC_IMAGES } from './types'
import { db } from '../firebase';

export default function getTopicImages() {
  return dispatch => {
    dispatch(startTopicImagesAsync());
    db.onceGetTopicImageList().then(snapshot => {
        let topicListState = Object.values(snapshot.val());
        dispatch(getTopicImagesAsync(topicListState))
      }
    ).catch(error => console.log("getTopicImages:"+error));
  }
}

function startTopicImagesAsync(){
  return {
    type: START_GET_TOPIC_IMAGES,
    fetching: "true"
  }
}

function getTopicImagesAsync(topicListState){
  return {
    type: GET_TOPIC_IMAGES,
    fetching: "false",
    payload:topicListState
  }
}
