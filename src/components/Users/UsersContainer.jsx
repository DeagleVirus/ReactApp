import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {setUsersAC, setTotalUsersCountAC,
     getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from './../../redux/users_reducer'
import Preloader from '../common/preloader/Preloader'
import { withRedirect } from '../../HOC/withRedirect'

class UsersClassContainer extends React.Component {
      
    render() {

        return <>
        {this.props.isFetching ? <Preloader /> : ( 
        <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       following={this.props.following}/>
        )}
        </>
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        following: state.usersPage.following,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followThunkCreator(userId)),
        unfollow: (userId) => dispatch(unfollowThunkCreator(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        getUsers: (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
    }
}

const RedirectContainerComponent = withRedirect(UsersClassContainer)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectContainerComponent)

export default UsersContainer