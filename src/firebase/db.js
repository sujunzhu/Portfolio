import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetTopicImageList = () =>
  db.ref('topicImageList').once('value');

export const onceGetSpecificTopicImageList = (topic) =>
  db.ref('specificTopicList/'+topic).once('value');

export const onceGetAboutContent = () =>
  db.ref('about').once('value');
