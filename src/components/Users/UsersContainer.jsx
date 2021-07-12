import React from 'react'
import { connect } from 'react-redux'
import Usersj from './Usersj'
import {FollowAC, UnFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleFetchingAC} from './../../redux/users_reducer'
import * as axios from 'axios'
import Preloader from '../common/preloader/Preloader'


class UsersClassContainer extends React.Component {
      
    render() {

        return <>
        {this.props.isFetching ? <Preloader /> : ( 
        <Usersj users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
        )}
        </>
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleFetching(false)
        } )
    }

    componentDidMount(){
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

export default UsersContainer