import {LOAD_POSTS_IN_PROGRESS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS} from './constants.js';

const postsApiUrl = `https://jsonplaceholder.typicode.com/posts/?limit=6`;
const loadPostsInProgress = () => {
	return {type: LOAD_POSTS_IN_PROGRESS};
};
const loadPostsError = payload => {
	return {type: LOAD_POSTS_ERROR, payload};
};
const loadPostsSuccess = payload => {
	return {type: LOAD_POSTS_SUCCESS, payload};
}

export const getPostsByRequest = state => async (dispatch, getState) => {
	try {
		dispatch(loadPostsInProgress());
		const response = await fetch(postsApiUrl);
		if (!response.ok) {
			throw new Error(`Произошла ошибка, код ответа: ${response.status}`);
		}
		const result = await response.json();
		dispatch(loadPostsSuccess(result));
	} catch (error) {
		dispatch(loadPostsError(error.message));
	}
}