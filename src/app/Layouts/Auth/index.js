import {useCallback, useState} from "react";
import {auth} from "../../Services/Firebase";

export const Auth = ({type}) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const handleInputEmail = (e) => setEmail(e.target.value);
	const handleInsetPassword = (e) => setPassword(e.target.value);
	const handleSendAuthForm = useCallback(() => {
		type === 'signup' ? auth().createUserWithEmailAndPassword(email, password) : auth().signInWithEmailAndPassword(email, password);
	}, [email, password, type]);
	return (
		<form className="auth-form">
			<input className="auth-form__email" onChange={handleInputEmail} type="email" placeholder="E-Mail" value={email}/>
			<input className="auth-form__password" onChange={handleInsetPassword} type="password" placeholder="Password" value={password}/>
			<button onClick={handleSendAuthForm} className="auth-form__send">Зарегистрироваться</button>
		</form>
	);
}