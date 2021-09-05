import {CHANGE_USER_PROFILE} from './constants.js';
import uniqid from 'uniqid'
const initialState = {
	id: uniqid(`profile_`,``),
	name: `Haytham Kenway`,
	age: 32,
	description: `I am fine and unforgetable!`,
	photo: `https://sun6-20.userapi.com/s/v1/ig2/Ci01AhXW7_a7lUdlHrT_NYdudrAWjYDcTV0gU2tE3MkZNtb-8m51lO2lW9GDTTDha0OeQWdJPNjDoe7TXRcHHLFi.jpg?size=400x480&quality=96&crop=0,0,500,600&ava=1`||`https://via.placeholder.com/150`
};
export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_USER_PROFILE:
			return action.payload || state;
		default:
			return state;
	}
}