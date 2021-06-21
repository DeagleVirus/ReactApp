const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_MESSAGE_TEXT = "ADD_MESSAGE_TEXT";

let dialogsPage = {
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
}

export const DialogsReducer = (state = dialogsPage, action) => {
  switch (action.type) {
    case ADD_MESSAGE: 
      let message = {
        message: state.TextChange,
      };

      return {
          ...state,
          messages: [...state.messages, message],
          TextChange: '',
      };

    case ADD_MESSAGE_TEXT: 
      return {
          ...state,
          TextChange: action.newText
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const addMessageTextActionCreator = (get) => ({
  type: ADD_MESSAGE_TEXT,
  newText: get,
});
