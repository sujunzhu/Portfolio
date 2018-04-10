import { combineReducers } from 'redux';
import TopicImageReducer from './reducer_topicImageList'
import SpecificTopicImageReducer from './reducer_specificTopicImageList'

const rootReducer = combineReducers({
  topicImageList: TopicImageReducer,
  specificTopicImageList: SpecificTopicImageReducer
});

export default rootReducer;
