import {combineReducers, legacy_createStore} from "redux";
import postReduser from "./postReduser";
import dialogReduser from "./dialogReduser";
import messageReduser from "./messageReduser";
import usersReducer from "../components/header/usersReducer";
import authReduser from "./authReduser";

let redusers = combineReducers({
    postsDate:postReduser,
    dialogData:dialogReduser,
    messagesDate:messageReduser,
    usersDate: usersReducer,
    auth:authReduser
    }

)

let store = legacy_createStore(redusers);

export default store
window.store = store