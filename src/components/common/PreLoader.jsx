import React from "react";
import s from "../users/UsersContainer.module.css";
import Loader from "../../images/Loading_icon.gif";

const PreLoader = () =>{
    return<div className={s.img}>
        <img src={Loader}/>
    </div>
}
export default PreLoader