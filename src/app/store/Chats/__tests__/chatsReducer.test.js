import {addChatRoom, removeChatRoom} from "../actions";
import {chatReducer} from "../reducer";
import {REMOVE_CHAT_ROOM} from "../constants";

describe('Test Chats Reducer', () => {
	it('Test Add Chat', () => {
		const testInitialState = [{id: `test_chat_1`, name: `Общий чат`, slug: `general`,}];
		const recived = chatReducer(testInitialState, addChatRoom({id: `test_chat_2`, name: `Просто чат`, slug: `not_general`,}));
		expect(recived).toEqual([...testInitialState, {id: `test_chat_2`, name: `Просто чат`, slug: `not_general`,}]);
	});
	it('Test Remove Chat', () => {
		const testInitialState = [{id: `test_chat_1`, name: `Общий чат`, slug: `general`,}, {id: `test_chat_2`, name: `Просто чат`, slug: `not_general`,}];
		const recived = chatReducer(testInitialState, {type: REMOVE_CHAT_ROOM, payload: `test_chat_2`});
		expect(recived).toEqual([testInitialState[0]]);
	});
});