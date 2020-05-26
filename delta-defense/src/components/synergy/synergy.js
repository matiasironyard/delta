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

  // route to user
  // Route to Uri
  // Get posts
  async function getPosts() {
    //console.log("getPosts...");
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const options = {
        method: "get",
        // headers, etc, if needed...
      };
      const response = await fetch(url, options);
      const data = await response.json();
      //console.log("syngergy posts", data);
      dispatch({
        type: "SET_POSTS",
        posts: data,
      });
    } catch (e) {
      console.warn("Error getting posts: ", e);
    }
  }
  // Get post details
  // Get users
  async function getUsers() {
    //console.log("getUsers...");
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const options = {
        method: "get",
        // headers, etc, if needed...
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("synergy users", data);
      dispatch({
        type: "SET_USERS",
        users: data,
      });
    } catch (e) {
      console.warn("Error getting users: ", e);
    }
  }
  // Get single user
  // Get comments
  async function getComments() {
    //console.log("getComments...");
    try {
      const url = "https://jsonplaceholder.typicode.com/comments";
      const options = {
        method: "get",
        // headers, etc, if needed...
      };
      const response = await fetch(url, options);
      const data = await response.json();
      //console.log("synergy comments", data);
      dispatch({
        type: "SET_COMMENTS",
        comments: data,
      });
    } catch (e) {
      console.warn("Error getting comments: ", e);
    }
  }

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
