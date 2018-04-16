import { START_GET_SPECIFIC_TOPIC, GET_SPECIFIC_TOPIC } from './types'
import architecture from '../data/architecture.json'
import city from '../data/city.json'
import cyanotype from '../data/cyanotype.json'
import ecolodge from '../data/ecolodge.json'
import malacca from '../data/malacca.json'
import man from '../data/man.json'
import tropical_roof from '../data/tropical_roof.json'
import { db } from '../firebase';

function getSpecificTopicImages(topic) {
  return dispatch => {
    dispatch(startGetSpecificTopicImagesAsync());
    console.log("loading old data...");
    let specificTopicList;
    topic = topic.toLowerCase().replace(/ /gi,"_")
    if(topic === "architecture"){
      specificTopicList = architecture;
    }if(topic === "city"){
      specificTopicList = city;
    }else if(topic === "cyanotype"){
      specificTopicList = cyanotype;
    }else if(topic === "ecolodge"){
      specificTopicList = ecolodge;
    }else if(topic === "malacca"){
      specificTopicList = malacca;
    }else if(topic === "man"){
      specificTopicList = man;
    }else if(topic === "tropical Roof"){
      specificTopicList = tropical_roof;
    }else{
      specificTopicList = architecture;
    }
    dispatch(getSpecificTopicImagesAsync(specificTopicList));
    db.onceGetSpecificTopicImageList(topic)
      .then(snapshot => {
        let specificTopicList = Object.values(snapshot.val());
        dispatch(getSpecificTopicImagesAsync(specificTopicList));
      })
      .catch(error => {
        console.log("getSpecificTopicImages:"+error);
      });
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
