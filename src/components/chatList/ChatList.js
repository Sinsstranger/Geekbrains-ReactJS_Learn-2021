import {useState} from "react";
import uniqid from 'uniqid';
import {List, ListItem, ListItemText, Container} from '@material-ui/core';

const ChatList = () => {
	const [chatList] = useState([{id: uniqid(), name: `Tech`}, {id: uniqid(), name: `News`}, {id: uniqid(), name: `Alarm`}]);
	return (<Container><h2>Channels List</h2><List>
		{chatList.map(chat => <ListItem key={chat.id}><ListItemText primary={chat.name}/></ListItem>)}
	</List></Container>);
}
export {ChatList};