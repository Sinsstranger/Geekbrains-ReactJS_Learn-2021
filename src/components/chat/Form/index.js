import {useSelector} from "react-redux";
import {useRef} from "react";

export const Form = ({handleFormSend}) => {
	const currentUser = useSelector(store => store.currentUser);
	const [author, text] = [useRef(null), useRef(null)];

	const preparingData = (e) => {
		e.preventDefault();
		handleFormSend(author.current.value, text.current.value);
	}
	return (
		<form className="chat-form" onSubmit={preparingData}>
			<input type="text" value={currentUser} disabled ref={author}/>
			<textarea ref={text}></textarea>
			<button>Send Form</button>
		</form>
	);
}