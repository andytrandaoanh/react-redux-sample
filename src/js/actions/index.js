// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action_types";
import { DATA_LOADED } from "../constants/action_types";


export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}