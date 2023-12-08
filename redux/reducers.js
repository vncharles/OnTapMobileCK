import * as types from './types';

const initalState = {
	todos: [],
	error: null,
};

export const todoReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.FETCH_TODO_SUCCESS:
			return {
				...state,
				todos: action.payload,
				error: null,
			};
		case types.ADD_TODO_SUCCESS:
			return {
				...state,
				todos: [...state.todos, action.payload],
				error: null,
			};
		case types.UPDATE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, title: action.payload.title }
						: todo
				),
				error: null,
			};
		case types.DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
				error: null,
			};
		case types.FETCH_TODO_FAIL:
		case types.ADD_TODO_FAIL:
		case types.UPDATE_TODO_FAIL:
		case types.DELETE_TODO_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default todoReducer;