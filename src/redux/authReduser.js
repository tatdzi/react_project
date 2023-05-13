import store from "./state";

const SET_USER_DATA = "SET_USER_DATA"




let initialState = {
    userId: null,
    email: null,
    login:null,
    isAuth: false
}



const authReducer = (state = initialState,action)=>{
    switch (action.type){
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData=(userId,email,login)=>
    ({type : SET_USER_DATA,data:{id:userId,email:email,login:login}})



export default authReducer
window.initialState = initialState