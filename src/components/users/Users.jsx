import React from "react";
import s from "./Users.module.css";

const Users =(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        if (props.currentPage<6 && pagesCount>=9){
            for (let i=1;i<=9;i++){
                pages.push(i);
            }
        }else if(props.currentPage>5 && pagesCount>=props.currentPage+4){
            for (let i =props.currentPage-4;i<=props.currentPage+4;i++){
                pages.push(i)
            }
        }else {
            pages.push(1)
        }

    return(
        <div>
            <div className={s.menu}>
                <h3>Users</h3>
            {pages.map(page => {
                return <span className={props.currentPage === page && s.selected}
                             onClick={(e) => {
                                 props.onPageChange(page)}}> {page} </span>
            })}
            </div>
            {props.mapUsers()}
            <button>Show more</button>
        </div>
    )
}
export default Users