import {useCallback, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PROFILE_SELECTOR} from "../../../store/Profile/secectors";
import './SendMessageForm.sass';
import {addUserMessage} from "../../../store/Messages/actions";

export const SendMessageForm = ({currentChat}) => {
	const [chatMessage, setChatMessage] = useState('');
	const currentUser = useSelector(PROFILE_SELECTOR);
	const formName = useRef(null);
	const dispatch = useDispatch();
	const handleSendMesssage = useCallback(() => {
		if (currentChat && currentUser && chatMessage.toString().trim() !== '') {
			dispatch(addUserMessage({currentChat, message: {author: currentUser.name, text: chatMessage}}));
			setChatMessage('');
			formName.current.focus();
		}
	}, [chatMessage, currentChat, currentUser, dispatch]);
	return (
		<form className="chat-content__form chat-message-form" onSubmit={(e) => e.preventDefault()}>
			<input ref={formName} onChange={(e) => setChatMessage(e.target.value)} type="text" value={chatMessage} className="chat-message-form__name" placeholder="Сообщение"/>
			<button className="chat-message-form__send" onClick={handleSendMesssage}>Отправить</button>
		</form>
	);
}