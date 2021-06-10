const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_MESSAGE_TEXT = "ADD_MESSAGE_TEXT";

export const DialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        message: state.TextChange,
      };

      state.messages.push(message);
      state.TextChange = "";
      return state;
    case ADD_MESSAGE_TEXT:
      state.TextChange = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const addMessageTextActionCreator = (get) => ({
  type: ADD_MESSAGE_TEXT,
  newText: get,
});
