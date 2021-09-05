import {ADD_CHAT_ROOM, ADD_CHAT_MESSAGE} from './constants.js';

export const ADD_ROOM = (payload) => {
	return {
		type: ADD_CHAT_ROOM, payload
	}
};
export const ADD_MESSAGE = (payload) => {
	return {
		type: ADD_CHAT_MESSAGE, payload
	}
}