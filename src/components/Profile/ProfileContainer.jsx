import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom'

class ProfileClassContainer extends React.Component{
    
    componentDidMount(){
        debugger
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })

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

const UrlDataContainerComponent = withRouter(ProfileClassContainer)

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(UrlDataContainerComponent)

export default ProfileContainer