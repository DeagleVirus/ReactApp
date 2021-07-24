import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setUserData} from '../../redux/auth_reducer'

class HeaderClassContainer extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0){
                    let {email, id, login} = response.data.data
                    this.props.setUserData(email, id, login)
                }
            })
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderClassContainer)

export default HeaderContainer