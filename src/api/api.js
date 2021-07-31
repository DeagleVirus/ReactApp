import axios from "axios";

let init = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '461e47fd-4b66-4cbe-b58f-8cdafa8ed27a'},
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return init.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data})
    }
}

export const followAPI = {
    follow(userId){
        return init.post(`follow/${userId}`)
    },

    unfollow(userId){
        return init.delete(`follow/${userId}`)
    }
}

export const HeaderAPI = {
    authorization(){
        return init.get('auth/me')
    }
}

export const ProfileAPI = {
    getUserProfile(userId) {
        return init.get(`profile/${userId}`)
    }
}