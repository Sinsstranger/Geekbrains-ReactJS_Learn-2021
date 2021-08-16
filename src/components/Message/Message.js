const Message = ({author, text, isCurrentUser}) => {
	return (
		<div className={`message-list__item chat-message ${isCurrentUser ? 'chat-message_current-user' : ''}`}>
			<img src="https://via.placeholder.com/40" alt="#" className="chat-message__image"/>
			<div className="chat-message__body">
				<p className="chat-message__author">{author}</p>
				<p className="chat-message__text">{text}</p>
			</div>
		</div>
	);
}
export default Message;