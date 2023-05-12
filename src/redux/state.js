import postReduser from "./postReduser";
import dialogReduser from "./dialogReduser";
import messageReduser from "./messageReduser";

let store = {
    _state : {
        postsDate:[
            {'íd':'1','message':'hi, haw are you?'},
            {'íd':'2','message':'its my first post'},
            {'íd':'3','message':'second post'},
            {'íd':'4','message':'hi, haw are you?'},
            {'íd':'5','message':'hi, haw are you?'}
        ],
        newPostText:' ',
        dialogData : [
            {'name':'Denis', 'id':'1'},
            {'name':'Vlad', 'id':'2'},
            {'name':'Larisa', 'id':'3'},
            {'name':'Lera', 'id':'4'},
            {'name':'Ilya', 'id':'5'},
            {'name':'Nikita', 'id':'6'},
            {'name':'Oleg', 'id':'7'}
        ],
        messagesDate :[
            {'id':'1','message':'Hi, How are you?'},
            {'id':'2','message':'nice,all right'},
            {'id':'3','message':'What are you going to do tomorrow?'},
            {'id':'4','message':'Hi'},
            {'id':'5','message':'Hi, How are you?'}
        ],

    },
    _collSubscriber(){
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._collSubscriber=observer;
    },


    dispatch(action){

        this._state = postReduser(this._state,action);
        this._state = dialogReduser(this._state,action);
        this._state = messageReduser(this._state,action);
            this._collSubscriber(this._state);
        }



}


export default store