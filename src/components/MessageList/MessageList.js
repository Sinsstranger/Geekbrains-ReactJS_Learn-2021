import Message from "../Message/Message";

const MessageList = ({messageList, currentUser}) => {
	return (
		<section className='message-list'>
			{messageList.map((message) => <Message key={message.id} author={message.author || ''} text={message.text} isCurrentUser={currentUser === message.author}/>)}
		</section>
	);
}
export default MessageList;