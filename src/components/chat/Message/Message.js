export const Message = ({currentUser, message}) => {
	return (<div className={`message-item ${message.user === currentUser ? `message-item--current` : ''}`}>
		<img src="https://via.placeholder.com/40" alt="#" className="message-item__image"/>
		<div className="message-item__body">
			<p className="message-item__author">{message.author}</p>
			<p className="message-item__text">{message.text}</p>
		</div>
	</div>)

}