import {useRef} from "react";
import {Container, Button, TextField} from '@material-ui/core'

const MessageForm = ({handleMessageSend, currentUser}) => {
	const author = useRef(null);
	const message = useRef(null);
	const sendForm = () => {
		handleMessageSend(author.current.value, message.current.value);
		message.current.value = '';
		message.current.focus();
	}
	return (
		<Container>
			<form action="#" className="message-form" onSubmit={sendForm} noValidate autoComplete="off">
				<TextField variant="filled" margin="normal" fullWidth inputRef={author} value={currentUser} disabled/>
				<TextField autoFocus="true" margin="normal" label="Ваше сообщение" variant="outlined" fullWidth inputRef={message}/>
				<Button type='submit' fullWidth style={{backgroundColor: '#cfe8fc', color: 'black'}}>Send</Button>
			</form>
		</Container>
	);
}
export default MessageForm;