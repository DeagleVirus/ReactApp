import {combineReducers, createStore} from 'redux'
import {ProfileReducer} from './profile_reducer'
import {DialogsReducer} from './dialogs_reducer'
import {UsersReducer} from './users_reducer'
import {AuthReducer} from './auth_reducer'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
})

let store = createStore(reducers)

window.store = store

export default store
