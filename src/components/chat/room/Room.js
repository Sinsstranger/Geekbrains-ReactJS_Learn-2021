import {Message} from '../Message/Message.js'
export const Room = ({messages}) => {
	console.log(messages)
	return (
		<section className="chat-room">
			{messages.map(message => <Message key={message.id} message={message}/>)}
		</section>
	)
}