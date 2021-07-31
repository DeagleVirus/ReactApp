import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfileThunkCreator } from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom'

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
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => ({
    getUserProfile: (userId) => dispatch(getUserProfileThunkCreator(userId))
})

const UrlDataContainerComponent = withRouter(ProfileClassContainer)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UrlDataContainerComponent)

export default ProfileContainer