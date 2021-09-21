import {ADD_MESSAGE, REMOVE_ALL_MESSAGES} from "./constants";

const addUserMessage = payload => {
	return {type: ADD_MESSAGE, payload}

}
const addUserMessageWithBotAnswer = payload => async (dispatch) => {
	await dispatch(addUserMessage(payload));
	await setTimeout(() => dispatch(addUserMessage({currentChat: payload.currentChat, message: {author: `Bot`, text: `Your message on moderation`}})), 500)
}
const removeAllMessages = payload => {
	return {type: REMOVE_ALL_MESSAGES, payload}
}
export {addUserMessage, removeAllMessages, addUserMessageWithBotAnswer}