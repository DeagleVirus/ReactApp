import { connect } from 'react-redux'
import Users from './Users'
import {FollowAC, UnFollowAC, setUsersAC} from './../../redux/users_reducer'

//debugger

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(FollowAC(userId)),
        unfollow: (userId) => dispatch(UnFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer