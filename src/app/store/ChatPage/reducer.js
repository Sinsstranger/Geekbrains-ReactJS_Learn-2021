import {ADD_CHAT_ROOM, ADD_CHAT_MESSAGE} from './constants.js';
import uniqid from "uniqid";

const initialState = [{
	id: uniqid(`group_`),
	name: `Общий чат`,
	type: `group`,
	messages: [
		{author: `Vasya`, message: `Hello`}
	]
}];
export const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHAT_ROOM:
			return state;
		case ADD_CHAT_MESSAGE:
			return state;
		default:
			return state;
	}
}