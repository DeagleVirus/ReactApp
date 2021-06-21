import {combineReducers, createStore} from 'redux'
import {ProfileReducer} from './profile_reducer'
import {DialogsReducer} from './dialogs_reducer'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

let store = createStore(reducers)

window.store = store

export default store
