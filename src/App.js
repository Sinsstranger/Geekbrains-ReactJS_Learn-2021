import {useState, useCallback, useEffect} from "react";
import uniqid from 'uniqid';
import {Container} from '@material-ui/core';
import MessageList from "./components/MessageList/MessageList.js";
import MessageForm from "./components/MessageForm/MessageForm.js";
import {ChatList} from "./components/chatList";
import "./assets/sass/main.sass";

const App = () => {
	const currentUser = 'Anonimous';
	const [messageList, changeMessageList] = useState([
		{id: uniqid(), author: `Sebrand`, text: `Hellow, are you Learning React Here?`},
		{id: uniqid(), author: `Edward`, text: `Yes we are!`}
	]);
	const handleMessageSend = useCallback((author, text) => {
		changeMessageList([...messageList, {id: uniqid(), author, text}]);
	}, [messageList]);
	useEffect(() => {
		const botChecking = async () => {
			try {
				if (messageList[messageList.length - 1].author !== 'Bot' && messageList[messageList.length - 1].author === 'Anonimous') {
					await setTimeout(() => changeMessageList([...messageList, {id: uniqid(), author: "Bot", text: `You messsage on moderation Checking`}]), 1500);
				}
			} catch (e) {
				console.error(e);
			}
		}
		botChecking().then();
	}, [messageList]);
	return (
		<>
			<header className="header">
				Чат
			</header>
			<main className="main">
				<Container>
					<div className='chat'>
						<MessageList messageList={messageList} currentUser={currentUser}/>
						<MessageForm handleMessageSend={handleMessageSend} currentUser={currentUser}/>
					</div>
				</Container>
				<ChatList/>
			</main>
			<footer className="footer">
				It's Footer
			</footer>
		</>
	);
}

export default App;
