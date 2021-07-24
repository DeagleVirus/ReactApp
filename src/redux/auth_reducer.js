const SET_USERS_LOGIN = 'SET_USERS_LOGIN'

let auth = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}
export const AuthReducer = (state = auth, action) => {
    switch(action.type){
        case SET_USERS_LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default: 
            return state
    }
}

export const setUserData = (email, id, login) => ({type: SET_USERS_LOGIN, data: {email, id, login}})
