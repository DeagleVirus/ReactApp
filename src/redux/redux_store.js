import {combineReducers, createStore} from 'redux'
import {ProfileReducer} from './profile_reducer'
import {DialogsReducer} from './dialogs_reducer'
import {UsersReducer} from './users_reducer'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
})

let store = createStore(reducers)

window.store = store

export default store
