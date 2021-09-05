import {Link} from "react-router-dom";
import './ChatItem.sass';

export const ChatItem = ({id, chatSlug, chatName}) => {
	return (<Link id={id} className='chat-controls__item' to={`/chats/${chatSlug}/`}>{chatName}</Link>);
}