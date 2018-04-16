import { START_GET_ABOUT_CONTENT,
         GET_ABOUT_CONTENT
       } from './types'
import { db } from '../firebase';

function getAboutContent() {
  return dispatch => {
    dispatch(startGetAboutContentAsync());
    let aboutContent = "This is default value";
    dispatch(getAboutContentAsync(aboutContent));
    db.onceGetAboutContent()
      .then(snapshot => {
        aboutContent = Object.values(snapshot.val());
        dispatch(getAboutContentAsync(aboutContent));
      })
      .catch(error => {
        console.log("getAboutContent:"+error);
      });
  }
}

function updateAboutContent(aboutContent) {
  return dispatch => {
    dispatch(startGetAboutContentAsync());
    db.doUpdateAboutContent(aboutContent)
      .then(() => {
        db.onceGetAboutContent()
          .then(snapshot => {
            let aboutContent = Object.values(snapshot.val());
            dispatch(getAboutContentAsync(aboutContent));
          })
          .catch(error => console.log("getAboutContent:"+error));
      })
      .catch(error => console.log("updateAboutContent:"+error));
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

export {
  getAboutContent,
  updateAboutContent,
}
