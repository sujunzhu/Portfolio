import { START_GET_SPECIFIC_TOPIC, GET_SPECIFIC_TOPIC } from './types'
/*import architecture from '../data/architecture.json'
import city from '../data/city.json'
import cyanotype from '../data/cyanotype.json'
import ecolodge from '../data/ecolodge.json'
import malacca from '../data/malacca.json'
import man from '../data/man.json'
import tropical_roof from '../data/tropical_roof.json'*/
import { db } from '../firebase';

function getSpecificTopicImages(topic) {
  return dispatch => {
    dispatch(startGetSpecificTopicImagesAsync());
    db.onceGetSpecificTopicImageList(topic.toLowerCase().replace(/ /gi,"_"))
      .then(snapshot => {
        let specificTopicList = Object.values(snapshot.val());
        dispatch(getSpecificTopicImagesAsync(specificTopicList));
      })
      .catch(error => console.log("getSpecificTopicImages:"+error));
  }
}

function updateSpecificTopicImages(topic,sTopicList) {
  return dispatch => {
    dispatch(startGetSpecificTopicImagesAsync());
    let obj = {};
    obj[topic] = sTopicList;
    db.doUpdateSpecificTopicList(obj).then(
      ()=>{
        db.onceGetSpecificTopicImageList(topic.toLowerCase().replace(/ /gi,"_")).then(snapshot => {
          let specificTopicList = Object.values(snapshot.val());
          dispatch(getSpecificTopicImagesAsync(specificTopicList));
        }).catch(error => console.log("update_getSpecificTopicImages:"+error));
      }).catch(error => console.log("updateSpecificTopicImages:"+error));
  }
}

function startGetSpecificTopicImagesAsync(){
  return {
    type: START_GET_SPECIFIC_TOPIC
  }
}

function getSpecificTopicImagesAsync(specificTopicList){
  return {
    type: GET_SPECIFIC_TOPIC,
    payload: specificTopicList
  }
}

export {
  getSpecificTopicImages,
  updateSpecificTopicImages,
}
