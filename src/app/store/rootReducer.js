import { combineReducers } from "redux";
import testReducer from "../../features/sendbox/testReducer";
import eventReducer from "../../features/events/eventReducer";

const rootReduder = combineReducers({
    test:testReducer,
    event:eventReducer,
})

export default rootReduder;