import { applyMiddleware, createStore  } from "redux";
// import {devToolsEnhancer} from "redux-devtools-extension"
import {composeWithDevTools} from "redux-devtools-extension"
import rootReduder from "./rootReducer";
import { thunk } from "redux-thunk";


export function configurStore(){
    // return createStore (rootReduder,devToolsEnhancer());
    return createStore (rootReduder,composeWithDevTools(applyMiddleware(thunk)));
}
