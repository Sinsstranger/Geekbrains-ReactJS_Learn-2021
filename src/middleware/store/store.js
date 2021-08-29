import {configureStore} from '@reduxjs/toolkit';
import {LinksReducer} from "../reducers/linksReducer/LinksReducer";
import {ChatRoomsReducer} from "../reducers/ChatRoomsReducer";

export const store = configureStore({
	reducer: {
		currentUser: () => 'Anonimous',
		links: LinksReducer,
		rooms: ChatRoomsReducer
	},
});
