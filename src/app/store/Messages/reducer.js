import {ADD_MESSAGE} from './constants.js';

const initialState = {
	messagesList: {},
};
export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				messagesList: {
					...state.messagesList,
					[action.payload.currentChat]: [
						...state?.messagesList[action.payload.currentChat] || [],
						action.payload.message
					],
				}
			};
		default:
			return state;
	}
}