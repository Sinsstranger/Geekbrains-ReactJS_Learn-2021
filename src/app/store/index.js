import {applyMiddleware, combineReducers, compose, createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {chatReducer} from "./Chats/reducer";
import {profileReducer} from './Profile/reducer.js';
import {messagesReducer} from "./Messages/reducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {postsReducer} from "./Posts/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
	key: 'appStorage',
	storage,
}
const appReducer = combineReducers({
	profile: profileReducer,
	chats: chatReducer,
	messages: messagesReducer,
	posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);