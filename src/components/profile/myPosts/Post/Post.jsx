import React from "react";
import s from "./Post.module.css"


const Post = (props) =>{
    return(
        <div className={s.item}>
            <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"/>
            {props.message}
        </div>
    )
}
export default Post