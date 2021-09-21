import {ADD_MESSAGE, REMOVE_ALL_MESSAGES} from './constants.js';

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
						...state.messagesList[action.payload.currentChat] || [],
						action.payload.message
					],
				}
			};
		case REMOVE_ALL_MESSAGES:
			let retMessagesList = JSON.parse(JSON.stringify(state));
			delete retMessagesList.messagesList[action.payload];
			return retMessagesList;
		default:
			return state;
	}
}