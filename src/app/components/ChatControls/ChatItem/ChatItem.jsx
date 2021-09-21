import React from "react";
import {Link} from "react-router-dom";
import {removeChatRoom} from "../../../store/Chats/actions";
import './ChatItem.sass';
import {useDispatch} from "react-redux";

export const ChatItem = React.memo(({id, chatSlug, chatName}) => {
	const dispatch = useDispatch();
	return (
		<div className='chat-controls__item'><Link className="chat-controls__item--name" id={id} to={`/chats/${chatSlug}/`}>{chatName}</Link><span className="chat-controls__item--remove" onClick={(e) => {
			dispatch(removeChatRoom(id));
		}}>&#10060;</span></div>
	);
});