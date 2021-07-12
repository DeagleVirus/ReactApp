const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let usersPage = {
    users: [],
    pageSize: 5,
    totalUsersCount: 18,
    currentPage: 1,
    isFetching: false,
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
                users: action.users
            }
        
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const FollowAC = (userId) => ({type: FOLLOW, userId})
export const UnFollowAC = (userId) => ({type: UNFOLLOW, userId}) 
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})