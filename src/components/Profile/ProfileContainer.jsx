import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfileThunkCreator } from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom'
import { withRedirect } from '../../HOC/withRedirect'
import { compose } from 'redux'

class ProfileClassContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)
    }


    render(){
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let mapDispatchToProps = (dispatch) => ({
    getUserProfile: (userId) => dispatch(getUserProfileThunkCreator(userId))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withRedirect,
)(ProfileClassContainer)
