import {ADD_CHAT_ROOM} from './constants.js';
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
		default:
			return state;
	}
}