import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {authThunkCreator, setUserData} from '../../redux/auth_reducer'

class HeaderClassContainer extends React.Component{
    componentDidMount(){
        this.props.authorization()
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let mapDispatchToProps = (dispatch) => ({
    setUserData,
    authorization: () => dispatch(authThunkCreator())
})

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClassContainer)

export default HeaderContainer