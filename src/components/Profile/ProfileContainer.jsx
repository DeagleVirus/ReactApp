import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getStatusThunkCreator, getUserProfileThunkCreator, updateStatusThunkCreator } from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom'
import { withRedirect } from '../../HOC/withRedirect'
import { compose } from 'redux'

class ProfileClassContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 18387
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render(){
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

let mapDispatchToProps = (dispatch) => ({
    getUserProfile: (userId) => dispatch(getUserProfileThunkCreator(userId)),
    getStatus: (userId) => dispatch(getStatusThunkCreator(userId)),
    updateStatus: (status) => dispatch(updateStatusThunkCreator(status)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withRedirect,
)(ProfileClassContainer)
