import {ADD_MESSAGE, REMOVE_ALL_MESSAGES} from "./constants";

const addUserMessage = payload => {
	return {type: ADD_MESSAGE, payload}

}
const addUserMessageWithBotAnswer = payload => (dispatch) => {
	dispatch(addUserMessage(payload));
	dispatch(addUserMessage({currentChat: payload.currentChat, message: {author: `Bot`, text: `Your message on moderation`}}));
}
const removeAllMessages = payload => {
	return {type: REMOVE_ALL_MESSAGES, payload}
}
export {addUserMessage, removeAllMessages, addUserMessageWithBotAnswer}