import {useCallback, useState} from "react";
import {auth} from "../../Services/Firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/firebase-auth";

export const Auth = ({type}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSendForm = useCallback(async (e) => {
		e.preventDefault();
		try {
			type === 'signup' ? await createUserWithEmailAndPassword(auth, email, password) : await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			console.log(e.message);
		}
	}, [email, password, type]);
	return (
		<div className="auth">
			<form className="auth__form">
				<input type="text" className="auth__email" onChange={(e) => setEmail(e.target.value)} value={email}/>
				<input type="text" className="auth__password" onChange={(e) => setPassword(e.target.value)} value={password}/>
				<button className="auth__send" onClick={handleSendForm}>{type === 'signup' ? 'Зарегистрироваться' : 'Войти'}</button>
			</form>
		</div>
	);
}