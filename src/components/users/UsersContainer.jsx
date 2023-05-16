import {connect} from "react-redux";
import {
    followCreater, setFetching,
    setTotalUsersCount,
    setUsersCreater,
    setUsersPageCreater,
    unfollowCreater
} from "../header/usersReducer";
import React from "react";
import User from "./User/User";
import Users from "./Users";
import PreLoader from "../common/PreLoader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.setFetching( true)
        getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.setFetching( false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }
    onPageChange = (page) =>{
        this.props.setUsersPage(page);
        this.props.setFetching( true)
        getUsers(page,this.props.pageSize).then(response => {
                this.props.setFetching( false)
                this.props.setUsers(response.items)
            });

    }
    mapUsers = () =>{
        let map = this.props.usersDate.usersDate.map
        (user =><User user={user}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>)
        return map;
    }

    render () {return<>
        {this.props.isFetching ? <PreLoader/>:<Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChange={this.onPageChange}
                             mapUsers={this.mapUsers}/>

        }
        </>
    }
}

let mapStateToProps = (state) =>{
    return{
        usersDate : state.usersDate,
        pageSize : state.usersDate.pageSize,
        totalUsersCount : state.usersDate.totalUsersCount,
        currentPage : state.usersDate.currentPage,
        isFetching: state.usersDate.isFetching
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow :(userId) =>{
            dispatch(followCreater(userId))
        },
        unfollow : (userId) => {
            dispatch(unfollowCreater(userId))
        },
        setUsers : (users) =>{
            dispatch(setUsersCreater(users))
        },
        setUsersPage : (number) =>{
            dispatch(setUsersPageCreater(number))
        },
        setTotalUsersCount : (number) =>{
            dispatch(setTotalUsersCount(number))
        },
        setFetching :(isFeching)=>{
            dispatch(setFetching(isFeching))
        }


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
