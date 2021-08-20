import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD_POST'
const ADD_POST_TEXT = 'ADD_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let profilePage = {
  posts: [
    { message: "hello, lets go to the gym", likes: "5" },
    { message: "good idea my friend!", likes: "3" },
  ],

  TextChange: "",
  profile: null,
  status: "",
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
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
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
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    ProfileAPI.getUserProfile(userId)
      .then(response => {
          dispatch(setUserProfile(response.data))
    })
}

export const getStatusThunkCreator = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
      .then(response => {
          dispatch(setStatus(response.data))
      })
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
      .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
      })
}