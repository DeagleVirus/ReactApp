const ADD_POST = "ADD_POST";
const ADD_POST_TEXT = "ADD_POST_TEXT";

let profilePage = {
  posts: [
    { message: "hello, lets go to the gym", likes: "5" },
    { message: "good idea my friend!", likes: "3" },
  ],

  TextChange: "",
}

export const ProfileReducer = (state = profilePage, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        message: state.TextChange,
        likes: "0",
      };
      
      return {
          ...state,
          posts: [...state.posts, post],
          TextChange: ''
      };
    }
    case ADD_POST_TEXT: {
      return {
          ...state,
          TextChange: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addPostTextActionCreator = (get) => ({
  type: ADD_POST_TEXT,
  newText: get,
});
