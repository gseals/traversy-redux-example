import {FETCH_POSTS, NEW_POST } from './types';

// dispatch is like a resolver in a Promise

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => dispatch({
      type: FETCH_POSTS,
      payload: posts
  }));
}