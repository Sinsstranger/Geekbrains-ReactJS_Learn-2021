import {combineReducers, createStore} from "@reduxjs/toolkit";
import {chatReducer} from "./ChatPage/reducer";
import {profileReducer} from './ProfilePage/reducer.js';

export const store = createStore(combineReducers({
	profile: profileReducer,
	chats: chatReducer,
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
