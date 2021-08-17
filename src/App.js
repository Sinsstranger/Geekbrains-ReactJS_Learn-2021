import React, {useState} from "react";
import MessageList from "./components/MessageList/MessageList.js";
import MessageForm from "./components/MessageForm/MessageForm.js"
import "./assets/sass/main.sass";

const App = () => {
	const currentUser = 'Sinstranger';
	const [messageList, changeMessageList] = useState([
		{author: `Sebrand`, text: `Hellow, are you Learning React Here?`},
		{author: `Edward`, text: `Yes we are!`}
	]);
	const handleMessageSend = (event) => {
		event.preventDefault();
		const author = event.target.querySelector('input[name="author"]').value;
		const text = event.target.querySelector('textarea').value;
		event.target.querySelector('textarea').value = "";
		changeMessageList([...messageList, {author, text}]);
	}
	return (
		<>
			<header className="header">
				Чат
			</header>
			<main className="main">
				<MessageList messageList={messageList} currentUser={currentUser}/>
				<MessageForm handleMessageSend={handleMessageSend} currentUser={currentUser}/>
			</main>
			<footer className="footer">
				It's Footer
			</footer>
		</>
	);
}

export default App;
