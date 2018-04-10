import { GET_SPECIFIC_TOPIC } from './types'
import architecture from '../data/architecture.json'
import city from '../data/city.json'
import cyanotype from '../data/cyanotype.json'
import ecolodge from '../data/ecolodge.json'
import malacca from '../data/malacca.json'
import man from '../data/man.json'
import tropical_roof from '../data/tropical_roof.json'

export default function getSpecificTopicImages(topic) {
  return dispatch => {
    let specificTopicList;
    if(topic === "Architecture"){
      specificTopicList = city;
    }if(topic === "City"){
      specificTopicList = city;
    }else if(topic === "Cyanotype"){
      specificTopicList = cyanotype;
    }else if(topic === "Ecolodge"){
      specificTopicList = ecolodge;
    }else if(topic === "Malacca"){
      specificTopicList = malacca;
    }else if(topic === "Man"){
      specificTopicList = man;
    }else if(topic === "Tropical Roof"){
      specificTopicList = tropical_roof;
    }else{
      specificTopicList = architecture;
    }
    dispatch(getSpecificTopicImagesAsync(specificTopicList));
  }
}

function getSpecificTopicImagesAsync(specificTopicList){
  return {
    type: GET_SPECIFIC_TOPIC,
    payload: specificTopicList
  }
}
