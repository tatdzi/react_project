const ADD_POST = "ADD_POST"
const UPDATE_TEXT="UPDATE_TEXT"
const SET_PROFILE="SET_PROFILE"
export let initialState = {
        profile:null,
        posts: [{'íd': '1', 'message': 'hi, haw are you?'},
            {'íd': '2', 'message': 'its my first post'},
            {'íd': '3', 'message': 'second post'},
            {'íd': '4', 'message': 'hi, haw are you?'},
            {'íd': '5', 'message': 'hi, haw are you?'}],
        newPostText: '',

}

const postReduser = (state=initialState,action) => {
    let state_copy
    switch (action.type) {
        case ADD_POST:
            state_copy = {
                ...state,
                posts: [...state.posts,{id:6,message: state.newPostText}]
            }
            state_copy.newPostText = '';
            return state_copy;
        case UPDATE_TEXT:
            state_copy = {
                ...state,
                newPostText: action.text
            }
            return state_copy;
        case SET_PROFILE:
            return {...state,profile: action.profile}
        default:
            return state;
    }
}
    export const addPostActionCreater=()=>({type : ADD_POST})
    export const updateTextActionCreater=(text)=>
        ({type:UPDATE_TEXT,text:text})
export const setProfile=(profile)=>({type:SET_PROFILE,profile:profile})

export default postReduser