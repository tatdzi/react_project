import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile/2' activeClassName={s.activelink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activelink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activelink}>Users</NavLink>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
    );
}
export default NavBar