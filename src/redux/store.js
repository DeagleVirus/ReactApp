import { ProfileReducer } from "./profile_reducer";
import { DialogsReducer } from "./dialogs_reducer";

let store = {
  _subscriber() {
    console.log("hello!!!");
  },

  _state: {
    dialogsPage: {
      dialogs: [
        { id: "1", name: "Sanya" },
        { id: "2", name: "Alex" },
        { id: "3", name: "Andriy" },
        { id: "4", name: "Pavlo" },
        { id: "5", name: "Dima" },
        { id: "6", name: "Serhiy" },
        { id: "7", name: "Yura" },
      ],

      messages: [
        { message: "Hello, how are you?" },
        { message: "let's play Call of Duty Warzone!" },
        { message: "Ok, go in the afternoon" },
        { message: "what day is it today?" },
      ],

      TextChange: "",
    },

    profilePage: {
      posts: [
        { message: "hello, lets go to the gym", likes: "5" },
        { message: "good idea my friend!", likes: "3" },
      ],

      TextChange: "",
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
    this._subscriber();
  },
};

export default store;

window.store = store;
