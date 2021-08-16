const MessageForm = ({handleMessageSend, currentUser}) => {
	return (
		<form action="#" className="message-form" onSubmit={handleMessageSend}>
			<label htmlFor="">Ваше имя:<input type="text" name="author" value={currentUser} disabled/></label>
			<label htmlFor="">Ваше сообщение:
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</label>
			<input type="submit" value="Send"/>
		</form>
	);
}
export default MessageForm;