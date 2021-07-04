const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let usersPage = {
    users: []
}
export const UsersReducer = (state = usersPage, action) => {
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                } )
            }
        
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                } )
            }
        
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const FollowAC = (userId) => ({type: FOLLOW, userId})
export const UnFollowAC = (userId) => ({type: UNFOLLOW, userId}) 
export const setUsersAC = (users) => ({type: SET_USERS, users})