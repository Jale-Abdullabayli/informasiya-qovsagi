import { combineReducers } from "redux";

import mentorReducer from './mentor/mentorReducer';

const rootReducer=combineReducers({
   mentor: mentorReducer
})

export default rootReducer;