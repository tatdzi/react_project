import {combineReducers, legacy_createStore} from "redux";
import postReduser from "./postReduser";
import dialogReduser from "./dialogReduser";
import messageReduser from "./messageReduser";
import usersReducer from "./usersReducer";

let redusers = combineReducers({
    postsDate:postReduser,
    dialogData:dialogReduser,
    messagesDate:messageReduser,
    usersDate: usersReducer
    }

)

let store = legacy_createStore(redusers);

export default store
window.store = store