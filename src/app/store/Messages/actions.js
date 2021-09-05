import {ADD_MESSAGE} from "./constants";

export const addUserMessage = (payload) => {
	return {type: ADD_MESSAGE, payload}

}