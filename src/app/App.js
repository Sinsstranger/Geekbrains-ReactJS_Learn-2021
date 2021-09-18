import {auth} from "./Services/Firebase";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {ChatPage} from './Layouts/ChatPage';
import {IndexPage} from './Layouts/PostsPage';
import {ProfilePage} from './Layouts/ProfilePage';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import './App.sass';
import {useEffect, useState} from "react";
import {PrivateRoute} from "./HOC/PrivateRoute";
import {PublicRoute} from "./HOC/PublicRoute";
import {Auth} from "./Layouts/Auth/Auth";
import {onAuthStateChanged} from "firebase/firebase-auth";


const App = () => {
	const [authenticated, setAuthenticated] = useState(false);
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setAuthenticated(!!user);
		});
	}, []);
	return (<div className="wrapper">
		<Header/>
		<main className="main">
			<Switch>
				<Route exact path="/" component={IndexPage}/>
				<PrivateRoute authenticated={authenticated} exact strict path="/chats/" component={ChatPage}/>
				<PrivateRoute authenticated={authenticated} exact strict path="/chats/:chatUrl/" component={ChatPage}/>
				<PrivateRoute authenticated={authenticated} exact path="/profile/" component={ProfilePage}/>
				<PublicRoute authenticated={authenticated} exact path="/signup/">
					<Auth type='signup'/>
				</PublicRoute>
				<PublicRoute authenticated={authenticated} exact path="/signin/">
					<Auth type='signin'/>
				</PublicRoute>
				<Route exact path="/404" component={() => <p>404 Page Is not found</p>}/>
				<Route path="*" exact>
					<Redirect to={{
						pathname: '/404',
						state: {referrer: useLocation()}
					}}/>
				</Route>
			</Switch>
		</main>
		<Footer/>
	</div>);
}

export default App;
