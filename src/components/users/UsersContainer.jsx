import {connect} from "react-redux";
import {
    followCreater, setFetching,
    setTotalUsersCount,
    setUsersCreater,
    setUsersPageCreater,
    unfollowCreater
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import User from "./User/User";
import Users from "./Users";
import PreLoader from "../common/PreLoader";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.setFetching( true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching( false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChange = (page) =>{
        this.props.setUsersPage(page);
        this.props.setFetching( true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching( false)
                this.props.setUsers(response.data.items)
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
