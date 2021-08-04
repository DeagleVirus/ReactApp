import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth){
            return <Redirect to='/login' />
        }
        return <Component {...props}/>
    }
    let RedirectComponentWithProps = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return RedirectComponentWithProps
}