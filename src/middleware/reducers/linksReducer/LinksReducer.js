const initialLinksState = [
	{link: `/`, anchor: `Home`},
	{link: `/chats`, anchor: `Chats`},
	{link: `/profile`, anchor: `Profile`},
];
export const LinksReducer = (state = initialLinksState, action) => {
	switch (action.type) {
		case 'ADD_LINK':
			return [
				...state,
				...action.payload
			]
		default:
			return state;
	}

}