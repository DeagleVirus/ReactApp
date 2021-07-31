import { HeaderAPI } from "../api/api"

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

export const authThunkCreator = () => (dispatch) => {
    HeaderAPI.authorization()
        .then(response => {
            if(response.data.resultCode === 0){
                let {email, id, login} = response.data.data
                dispatch(setUserData(email, id, login))
            }
        })
}
