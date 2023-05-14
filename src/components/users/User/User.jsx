import React from "react";
import './User.module.css'
import axios from "axios";
import {NavLink} from "react-router-dom";
import {followUser} from "../../../api/api";

const User=(props)=>{


    return(
        <div>
            <div >
                <h3>{props.user.name}</h3>
                <div>
                    <NavLink to={"/profile/"+props.user.id}>
                    <img src={props.user.photos.large !== null?props.user.photos.large:props.user.photos.small !== null?props.user.photos.small:
                    "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" }/>
                </NavLink>
                    </div>
                <div>
                    {props.user.followed ?
                        <button onClick={()=>{
                            followUser(props.user.id,props.user.followed)
                                .then(response => {
                                    if (response.resultCode == 0){
                                        props.unfollow(props.user.id)
                                    }
                                });
                        }}>unfollow</button>
                        :<button onClick={()=>{
                            followUser(props.user.id,props.user.followed)
                                .then(response => {
                                    if (response.resultCode == 0){
                                        props.follow(props.user.id)
                                    }
                                });
                        }}>follow</button>}
                </div>
            </div>



        </div>
    )
}
export default User