import {ADD_CHAT_ROOM, REMOVE_CHAT_ROOM} from './constants.js';
import {removeAllMessages} from "../Messages/actions";
export const addChatRoom = (payload) => {
	return {
		type: ADD_CHAT_ROOM, payload
	}
};
export const removeChatRoom = payload => (dispatch, getState) => {
	const {messages} = getState();
	if (messages.messagesList[payload]) {
		dispatch(removeAllMessages(payload));
	}
	dispatch({type: REMOVE_CHAT_ROOM, payload});
}