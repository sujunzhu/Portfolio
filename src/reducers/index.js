import { combineReducers } from 'redux';
import TopicImageReducer from './reducer_topicImageList'
import SpecificTopicImageReducer from './reducer_specificTopicImageList'
import SessionReducer from './reducer_session'
import AboutContentReducer from './reducer_about'

const rootReducer = combineReducers({
  topicImageList: TopicImageReducer,
  specificTopicImageList: SpecificTopicImageReducer,
  sessionState: SessionReducer,
  aboutContent: AboutContentReducer,
});

export default rootReducer;
