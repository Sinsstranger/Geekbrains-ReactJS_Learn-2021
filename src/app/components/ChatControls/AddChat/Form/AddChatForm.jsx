import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import uniqid from "uniqid";
import {slugify} from "transliter";
import {chatsSelector} from "../../../../store/Chats/secectors";
import {addChatRoom} from "../../../../store/Chats/actions";
import './AddCahtForm.sass';

export const AddChatForm = (props) => {
	const [chatName, setChatName] = useState('');
	const dispatchChatRoom = useDispatch();
	const chatUriPath = useHistory();
	const allChats = useSelector(chatsSelector);
	const handleCreateChat = useCallback(() => {
		let chatSlug = slugify(chatName, `-`);
		if (allChats.findIndex(chat => chat.slug === chatSlug) !== -1) {
			console.log(`Такой чат уже существует`);
		} else {
			const chatRoom = {
				id: uniqid(`chat_`),
				name: chatName,
				slug: slugify(chatName, `-`),
			}
			dispatchChatRoom(addChatRoom(chatRoom));
			chatUriPath.push(`/chats/${chatRoom.slug}/`);
			setChatName('');
		}
	}, [allChats, chatName, chatUriPath, dispatchChatRoom]);
	return (
		<form className="add-chat-form" onSubmit={(e) => e.preventDefault()}>
			<input onChange={(e) => setChatName(e.target.value)} value={chatName} type="text" placeholder="Название чата" className="add-chat-form__name"/>
			<button className="add-chat-form__create" onClick={handleCreateChat}>Создать</button>
		</form>
	);
}