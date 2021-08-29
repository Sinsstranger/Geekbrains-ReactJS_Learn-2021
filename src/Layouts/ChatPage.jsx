import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useMemo} from "react";
import {Room} from '../components/chat/room/Room'
import {Form} from '../components/chat/Form'
import './ChatPage.sass';
import uniqid from "uniqid";

export const ChatPage = (props) => {
	const dispatch = useDispatch();
	const {chatname} = useParams();
	const rooms = useSelector(state => state.rooms);
	const messages = useMemo(() => {
		return rooms.filter(room => room.link === chatname);
	}, [chatname, rooms]);
	useEffect(() => {
		document.title = rooms.find(room => room.link === chatname) ? `Чат | ${rooms.find(room => room.link === chatname).anchor}` : 'Список чатов';
	}, [chatname, rooms]);
	const handleFormSend = useCallback((author, text) => {
		dispatch({type: 'ADD_MESSAGE', chatname, payload: {id: uniqid(), user: author, text}});
	}, [dispatch, chatname]);
	return (
		<div className="chat-page">
			{!props.onlyList ? <section className="chat-part">
				<Room chatname={chatname} messages={messages[0].messages}/>
				<Form handleFormSend={handleFormSend}/>
			</section> : ''}
			<section className="menu-part">
				{rooms.map(room => <Link key={room.link} to={`/chats/${room.link}`} className="menu-part__link">{room.anchor}</Link>)}
			</section>
		</div>
	)
}