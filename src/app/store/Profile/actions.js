import {CHANGE_USER_PROFILE} from "./constants";

export const changeUserProfile = (payload) => {
	return {type: CHANGE_USER_PROFILE, payload}

}