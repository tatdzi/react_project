import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/postReduser";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (userId === null){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }
    render() {
        return<Profile {...this.props}/>
    }
}
let mapStateToProps = (state) =>{
    return{
        profile: state.postsDate.profile,
        isFetching: state.usersDate.isFetching
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        setProfile :(profile)=>{
            dispatch(setProfile(profile))
        }


    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer))
