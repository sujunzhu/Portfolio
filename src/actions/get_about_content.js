import { START_GET_ABOUT_CONTENT, GET_ABOUT_CONTENT } from './types'
/*import architecture from '../data/architecture.json'
import city from '../data/city.json'
import cyanotype from '../data/cyanotype.json'
import ecolodge from '../data/ecolodge.json'
import malacca from '../data/malacca.json'
import man from '../data/man.json'
import tropical_roof from '../data/tropical_roof.json'*/
import { db } from '../firebase';

export default function getAboutContent() {
  return dispatch => {
    dispatch(startGetAboutContentAsync());
    db.onceGetAboutContent()
      .then(snapshot => {
        let aboutContent = Object.values(snapshot.val());
        dispatch(getAboutContentAsync(aboutContent));
      })
      .catch(error => console.log("getAboutContent:"+error));
  }
}

function startGetAboutContentAsync(){
  return {
    type: START_GET_ABOUT_CONTENT
  }
}

function getAboutContentAsync(aboutContent){
  return {
    type: GET_ABOUT_CONTENT,
    payload: aboutContent
  }
}
