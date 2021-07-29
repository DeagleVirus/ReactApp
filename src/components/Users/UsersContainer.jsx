import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {FollowAC, UnFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleFetchingAC, toggleFollowingAC} from './../../redux/users_reducer'
import Preloader from '../common/preloader/Preloader'
import {usersAPI} from '../../api/api'


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
                       toggleFollowing={this.props.toggleFollowing}
                       following={this.props.following}/>
        )}
        </>
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.toggleFetching(true)
        usersAPI.getUsers(p, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            this.props.toggleFetching(false)
        } )
    }

    componentDidMount(){
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            //this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleFetching(false)
        } )
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
        follow: (userId) => dispatch(FollowAC(userId)),
        unfollow: (userId) => dispatch(UnFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        toggleFetching: (isFetching) => dispatch(toggleFetchingAC(isFetching)),
        toggleFollowing: (isFetching, userId) => dispatch(toggleFollowingAC(isFetching, userId)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

export default UsersContainer