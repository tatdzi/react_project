import React from "react";
import Post from "./Post/Post";
import {addPostActionCreater, updateTextActionCreater} from "../../../redux/postReduser";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) =>{
    return{
        posts : state.postsDate.posts,
        newPostText : state.postsDate.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addNewPost :() =>{
            dispatch(addPostActionCreater())
        },
        updateNewPost : (text) => {
            dispatch(updateTextActionCreater(text))
        }

    }
}

const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsConteiner