import { sampleData } from "../../app/api/sampleData";
import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT } from "./eventConstant";

const initialState = {
    events: []
}

export default function eventReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload.id), payload]
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload)]
            }
        case FETCH_EVENT:
            return {
                ...state,
                events: payload
            }

        default:
            return state;
    }
}