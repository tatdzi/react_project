import React from "react";
import s from "./Profile.module.css"

import ProfilInfo from "./profilInfo/ProfilInfo";
import MyPostsConteiner from "./myPosts/MyPostsContainer";
import PreLoader from "../common/PreLoader";

const Profile = (props) =>{
    if (!props.profile){
        return <PreLoader/>
    }
    return(
    <div className={s.content}>
        <ProfilInfo {...props.profile}/>
        <MyPostsConteiner/>
    </div>
    );
}
export default Profile