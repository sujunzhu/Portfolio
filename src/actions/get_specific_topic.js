import { START_GET_SPECIFIC_TOPIC, GET_SPECIFIC_TOPIC } from './types'
/*import architecture from '../data/architecture.json'
import city from '../data/city.json'
import cyanotype from '../data/cyanotype.json'
import ecolodge from '../data/ecolodge.json'
import malacca from '../data/malacca.json'
import man from '../data/man.json'
import tropical_roof from '../data/tropical_roof.json'*/
import { db } from '../firebase';

export default function getSpecificTopicImages(topic) {
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
