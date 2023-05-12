import store from "./state";

const FOLLOW = "FOLLOW"
const UNFOLLOW="UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_USERS_PAGE = "SET_USERS_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const IS_FETCHING_TRUE = "IS_FETCHING_TRUE"


let initialState = {
   usersDate: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false
}



const usersReducer = (state = initialState,action)=>{
    let state_copy
switch (action.type){
    case FOLLOW:
        return  {
            ...state,
            usersDate: state.usersDate.map(user=>{
                if (user.id === action.id){
                    return {...user,followed: true}
                }
                return user
            })
        }
    case UNFOLLOW:
        return {
            ...state,
            usersDate: state.usersDate.map(user=> {
                if (user.id === action.id) {
                    return {...user, followed: false}
                }
                return user
            }
            )}
    case SET_USERS:
        return {...state, usersDate: action.users}
    case SET_USERS_PAGE:
        return {...state,currentPage: action.number}
    case SET_TOTAL_USERS_COUNT:
        return {...state,totalUsersCount: action.number}
    case IS_FETCHING_TRUE:
    return {...state,isFetching: action.isFetching}

    default:
        return state
}
}

export const followCreater=(userId)=>
    ({type : FOLLOW,id:userId})
export const unfollowCreater=(userId)=>
    ({type: UNFOLLOW,id:userId})
export const setUsersCreater=(users)=>
    ({type:SET_USERS,users:users})
export const setUsersPageCreater=(number)=>
    ({type:SET_USERS_PAGE, number:number})
export  const setTotalUsersCount=(number)=>
    ({type:SET_TOTAL_USERS_COUNT,number:number})
export const setFetching=(isFetching)=>
    ({type:IS_FETCHING_TRUE,isFetching:isFetching})


export default usersReducer
window.initialState = initialState