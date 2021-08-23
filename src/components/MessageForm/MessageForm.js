import {useRef} from "react";

const MessageForm = ({handleMessageSend, currentUser}) => {
	const author = useRef(null);
	const message = useRef(null);
	const sendForm = () => {
		handleMessageSend(author.current.value, message.current.value);
		[author.current.value, message.current.value] = ['', '']
	}
	return (
		<form action="#" className="message-form" onSubmit={sendForm}>
			<label htmlFor="">Ваше имя:<input type="text" name="author" ref={author} value={currentUser} disabled/></label>
			<label htmlFor="">Ваше сообщение:
				<textarea name="" id="" cols="30" rows="10" ref={message}></textarea>
			</label>
			<input type="submit" value="Send"/>
		</form>
	);
}
export default MessageForm;