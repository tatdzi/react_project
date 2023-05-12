import React from "react";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.posts.map
    (post => <Post message={post.message}/>)

    let onAddPost=()=>{
        props.addNewPost();
    }
    let onNewPostText=(e) =>{
        let text = e.target.value
        props.updateNewPost(text);
    }
    return (
        <div>
            My posts
            <div>
                <textarea onChange={onNewPostText} value={props.newPostText}></textarea>
                <div>
                <button onClick={onAddPost}>submit</button>
            </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts