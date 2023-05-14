import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    BaseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"6c6dcf37-67eb-4244-ba1c-845eb9fb2f77"
    }
})

export const getUsers= (currentPage=1,pageSize=10 )=>{
    return(
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> response.data)
    )
}
export const followUser=(id, userfollow)=>{
    if (userfollow){
        return (
            instance.delete(`follow/${id}`)
                .then(response => response.data)
        )
    }else {
        return (
            instance.post(`follow/${id}`)
                .then(response => response.data)
        )
    }
}