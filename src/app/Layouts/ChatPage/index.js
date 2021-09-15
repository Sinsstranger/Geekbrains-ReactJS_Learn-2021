import {useSelector} from "react-redux";
import './ChatPage.sass';
import {chatsSelector} from "../../store/Chats/secectors";
import {Route, Switch} from "react-router-dom";
import {AddChatForm, ProfileInfo, ChatItem} from "../../components/ChatControls";
import {Message, SendMessageForm} from "../../components/ChatContent";
import {getMessages} from "../../store/Messages/secectors";

export const ChatPage = (props) => {
	const chats = useSelector(chatsSelector);
	const activeChatId = useSelector((state, chatUrl = props.match.params.chatUrl) => {
		return chats.find(chat => chat.slug === chatUrl)?.id || '';
	});
	const messages = useSelector(getMessages).messagesList[activeChatId] || false;
	return (
		<div className="chat-wrapper">
			<div className="chat-controls">
				<ProfileInfo/>
				<div className="chat-controls__chats">
					{chats.map(chat => <ChatItem id={chat.id} key={chat.id} match={props.match} chatId={chat.id} chatName={chat.name} chatSlug={chat.slug}/>)}
				</div>
				<div className="chat-controls__actions">
					<AddChatForm/>
				</div>
			</div>
			<div className="chat-content" data-active-chat={activeChatId}>
				<Switch>
					<Route exact strict path={`/chats/:chatSlug/`}>
						<div className="chat-content__messages">
							{messages && messages.map((message, index) => <Message key={`${activeChatId}_${index}`} author={message.author} text={message.text}/>)}
						</div>
						<SendMessageForm currentChat={activeChatId}/>
					</Route>
				</Switch>
			</div>
		</div>
	);
}