import { START_GET_TOPIC_IMAGES, GET_TOPIC_IMAGES } from './types'
import { db } from '../firebase';
import topicImageList from '../data/topicImageList.json'

function getTopicImages() {
  return dispatch => {
    dispatch(startTopicImagesAsync());
    let topicListState = topicImageList;
    dispatch(getTopicImagesAsync(topicListState));
    db.onceGetTopicImageList().then(snapshot => {
        topicListState = Object.values(snapshot.val());
        dispatch(getTopicImagesAsync(topicListState))
      }
    ).catch(error => {
      console.log("getTopicImages:"+error);
    });
  }
}

function updateTopicImages(topicList) {
  return dispatch => {
    dispatch(startTopicImagesAsync());
    db.doUpdateTopicList(topicList).then(
      () => {
        db.onceGetTopicImageList().then(snapshot => {
            let topicListState = Object.values(snapshot.val());
            dispatch(getTopicImagesAsync(topicListState))
          }
        ).catch(error => console.log("update_getTopicImages:" + error));
    }).catch(error => console.log("updateTopicImages:" + error));
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

export{
  getTopicImages,
  updateTopicImages,
}
