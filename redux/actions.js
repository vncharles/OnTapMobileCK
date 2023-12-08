import axios from 'axios';
import * as types from './types';

const API_URL = "https://6544b1a55a0b4b04436cc6ed.mockapi.io/api/v1/user/1/todos"

export const fetchTodo = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}?userId=${userId}`);
      dispatch({type: types.FETCH_TODO_SUCCESS, payload: response.data})
    } catch(error) {
      dispatch({type: types.FETCH_TODO_FAIL, payload: error.message})
    }
  }
}

export const addTodo = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_URL, {title});
      dispatch({type: types.ADD_TODO_SUCCESS, payload: response.data})
    } catch(error) {
      dispatch({type: types.ADD_TODO_FAIL, payload: error.message})
    }
  }
}

export const updateTodo = (id, title) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`API_URL`, {title});
      dispatch({types: types.UPDATE_TODO_SUCCESS, payload: response.data})
    } catch(error) {
      dispatch({types: types.UPDATE_TODO_FAIL, payload: error.message})
    }
  }
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`API_URL/${id}`);
      dispatch({type: types.DELETE_TODO_SUCCESS, payload: response.data})
    } catch(error) {
      dispatch({type: types.DELETE_TODO_FAIL, payload: error.message})
    }
  }
}