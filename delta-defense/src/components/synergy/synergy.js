import { useReducer, useMemo, useEffect } from "react";
import constate from "constate";
import { useHistory } from "react-router-dom";

const initialState = {
  posts: [],
  users: [],
  comments: [],
  postDetails: {},
  userId: null,
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.comments,
      };
    case "SET_USERID":
      return {
        ...state,
        userId: action.userId,
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        user: action.user,
      };
    case "SET_POST_DETAILS":
      return {
        ...state,
        postDetails: action.postDetails,
      };
    default:
      return state;
  }
};

const useAppData = () => {
  const history = useHistory();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, posts, comments, userId, user, postDetails } = state;

  return {
    users,
    posts,
    comments,
    userId,
    user,
    postDetails,
  };
};

const [ContextProvider, UseContext] = constate(useAppData);

export { ContextProvider, UseContext };

/**
 * NOTES:
 * Implemented epreciation update: https://github.com/diegohaz/constate/pull/101
 *
 */
