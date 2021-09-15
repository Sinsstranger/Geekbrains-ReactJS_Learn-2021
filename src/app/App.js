import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import {ChatPage} from './Layouts/ChatPage';
import {IndexPage} from './Layouts/IndexPage';
import {ProfilePage} from './Layouts/ProfilePage';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import './App.sass';

const App = () => {
	return (<div className="wrapper">
		<Header/>
		<main className="main">
			<Switch>
				<Route exact path="/" component={IndexPage}/>
				<Route exact strict path="/chats/" component={ChatPage}/>
				<Route exact strict path="/chats/:chatUrl/" component={ChatPage}/>
				<Route exact path="/profile/" component={ProfilePage}/>
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
