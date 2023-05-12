import React from "react";
import s from "./ProfileInfo.module.css"


const ProfilInfo = (props)=>{
    return(
        <div>
         <div>
            <img src="https://static5.depositphotos.com/1029404/412/i/450/depositphotos_4122066-stock-photo-autumn-landscape.jpg"/>
            </div>
            <div className={s.grids}>
                <div className={s.photo}><img src={props.photos.large !== null?props.photos.large:props.photos.small !== null?props.photos.small:
                    "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" }/></div>
                <div className={s.info}>
                    <h3>{props.fullName}</h3>
                    <p>
                        facebook : {props.contacts.facebook}<br/>
                        twitter : {props.contacts.twitter}<br/>
                        instagram : {props.contacts.instagram}<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProfilInfo