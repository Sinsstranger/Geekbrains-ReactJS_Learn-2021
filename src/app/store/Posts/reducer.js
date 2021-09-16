import {LOAD_POSTS_IN_PROGRESS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS} from './constants.js';

const initialState = {
	error: false,
	loading: true,
	items: []
}
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POSTS_IN_PROGRESS:
			return {
				...state,
				loading: true,
				error: false,
			};
		case LOAD_POSTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case LOAD_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				items: [...action.payload]
			};
		default:
			return state

	}
}