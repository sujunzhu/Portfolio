import { db } from './firebase';

// User API

export const doUpdateAboutContent = (about) =>
  db.ref("about").update({
    aboutContent:about,
  });

export const doUpdateTopicList = (topicList) =>
  db.ref().update({
    topicImageList:topicList,
  });

export const doUpdateSpecificTopicList = (obj) => 
  db.ref("specificTopicList").update(obj);

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetTopicImageList = () =>
  db.ref('topicImageList').once('value');

export const onceGetSpecificTopicImageList = (topic) =>
  db.ref('specificTopicList/'+topic).once('value');

export const onceGetAboutContent = () =>
  db.ref("about").once('value');
