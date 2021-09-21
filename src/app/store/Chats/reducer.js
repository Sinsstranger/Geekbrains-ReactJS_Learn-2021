import {ADD_CHAT_ROOM, REMOVE_CHAT_ROOM} from './constants.js';
import uniqid from "uniqid";

const initialState = [{
	id: uniqid(`chat_`),
	name: `Общий чат`,
	slug: `general`,
}];
export const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHAT_ROOM:
			return [...state, action.payload];
		case REMOVE_CHAT_ROOM:
			let chatToDeleteIndex = state.findIndex(chat => chat.id === action.payload);
			return state.slice(0, chatToDeleteIndex).concat(state.slice(chatToDeleteIndex + 1));
		default:
			return state;
	}
}