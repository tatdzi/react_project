import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header = (props) =>{
    return(
    <header className={s.header}>
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"/>
        <div className={s.login}>
            <NavLink to={'/login'}>{props.login}</NavLink>
        </div>
        </header>
    );
}
export default Header;
