import {combineReducers, createStore} from "@reduxjs/toolkit";
import {chatReducer} from "./Chats/reducer";
import {profileReducer} from './Profile/reducer.js';
import {messagesReducer} from "./Messages/reducer";

export const store = createStore(combineReducers({
	profile: profileReducer,
	chats: chatReducer,
	messages: messagesReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
