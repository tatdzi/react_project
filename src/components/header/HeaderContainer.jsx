import React from "react";
import Header from "./Header";
import axios from "axios";
class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`,
            {withCredentials: true})
            .then(response => {
                debugger;
            });
    }

    render() {
    return <Header {...this.props}/>}
}
export default HeaderContainer;
