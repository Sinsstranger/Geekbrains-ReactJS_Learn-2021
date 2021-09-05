import {ADD_CHAT_ROOM} from './constants.js';

export const addChatRoom = (payload) => {
	return {
		type: ADD_CHAT_ROOM, payload
	}
};