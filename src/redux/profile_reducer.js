import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD_POST'
const ADD_POST_TEXT = 'ADD_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let profilePage = {
  posts: [
    { message: "hello, lets go to the gym", likes: "5" },
    { message: "good idea my friend!", likes: "3" },
  ],

  TextChange: "",
  profile: null,
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    ProfileAPI.getUserProfile(userId)
      .then(response => {
          dispatch(setUserProfile(response.data))
    })
}