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
  // Route to details
  const routeToDetails = (postId, userId) => {
    history.push(`/posts/${postId}?user=${userId}`);
    dispatch({
      type: "SET_USERID",
      userId: userId,
    });
  };
  // route to user
  const routeToUser = (userId) => {
    history.push(`/users/${userId}`);
  };
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
  async function getPostDetails() {
    dispatch({
      type: "SET_POST_DETAILS",
      postDetails: [],
    });
    const pathName = history.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const postUser = urlParams.get("user");
    const selectedPostId = pathName.split("/")[2];
    const options = {
      method: "get",
    };
    const userUrl = `https://jsonplaceholder.typicode.com/users/${postUser}`;
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${selectedPostId}`;
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${selectedPostId}`;

    const requests = [postUrl, userUrl, commentsUrl].map((url) =>
      fetch(url, options).then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
    );
    const [postData, userData, commentsData] = await Promise.all(requests);
    console.log("postData", postData);
    console.log("postUser", userData);
    console.log("commentData", commentsData);
    const postDetails = {
      postData: postData,
      userData: userData,
      commentsData: commentsData,
    };
    dispatch({
      type: "SET_POST_DETAILS",
      postDetails: postDetails,
    });
  }
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
  useEffect(() => {
    getPosts();
    getUsers();
    getComments();
  }, []);
  return {
    users,
    posts,
    comments,
    userId,
    user,
    postDetails,
    getPosts,
    getUsers,
    getComments,
  };
};

const [ContextProvider, UseContext] = constate(useAppData);

export { ContextProvider, UseContext };

/**
 * NOTES:
 * Implemented epreciation update: https://github.com/diegohaz/constate/pull/101
 *
 */
