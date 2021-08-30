import uniqid from 'uniqid';

const initialRoomsState = [
	{link: `tech`, anchor: `Технический`, messages: [{id: uniqid(), user: `Sergey`, text: `What About Project`}, {id: uniqid(), user: `Peter`, text: `I don't know`}]},
	{link: `talks`, anchor: `Болталка`, messages: [{id: uniqid(), user: `Sergey`, text: `What's App'`}, {id: uniqid(), user: `Peter`, text: `Well Done`}]},
	{link: `moderation`, anchor: `Модерация`, messages: [{id: uniqid(), user: `Sergey`, text: `What about Invite`}, {id: uniqid(), user: `Peter`, text: `I mean Yes`}]},
];
export const ChatRoomsReducer = (state = initialRoomsState, action) => {
	switch (action.type) {
		case 'ADD_ROOM':
			return [
				...state,
				...action.payload
			]
		case 'ADD_MESSAGE':
			let messages = () => {
				let result = JSON.parse(JSON.stringify(state));
				result.find(room => room.link === action.chatname).messages.push(action.payload);
				return result;
			};
			return messages();
		default:
			return state;
	}

}