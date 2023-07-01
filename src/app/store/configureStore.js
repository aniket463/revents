import { createStore  } from "redux";
import {devToolsEnhancer} from "redux-devtools-extension"
import rootReduder from "./rootReducer";

export function configurStore(){
    return createStore (rootReduder,devToolsEnhancer());
}