import { combineReducers } from 'redux';
import TopicImageReducer from './reducer_topicImageList'
import SpecificTopicImageReducer from './reducer_specificTopicImageList'
import SessionReducer from './reducer_session'

const rootReducer = combineReducers({
  topicImageList: TopicImageReducer,
  specificTopicImageList: SpecificTopicImageReducer,
  sessionState: SessionReducer,
});

export default rootReducer;
