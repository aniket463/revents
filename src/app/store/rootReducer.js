import { combineReducers } from "redux";
import testReducer from "../../features/sendbox/testReducer";
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../async/asyncReducer";

const rootReduder = combineReducers({
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})

export default rootReduder;