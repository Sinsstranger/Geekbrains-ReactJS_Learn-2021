import React from 'react';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Switch, Route, Redirect} from "react-router-dom";
import './App.sass';
import {ChatPage} from "./Layouts/ChatPage";
import {ProfilePage} from "./Layouts/ProfilePage";

function App() {
	return (
		<div className="wrapper">
			<Header/>
			<main className="main">
				<Switch>
					<Route path="/chats/:chatname">
						<ChatPage/>
					</Route>
					<Route path="/chats">
						<ChatPage onlyList/>
					</Route>
					<Route path="/profile">
						<ProfilePage/>
					</Route>
					<Route exact path="/">
						MAIN
					</Route>
					<Route path="/404">
						404 NOT-FOUND
					</Route>
					<Route path="*">
						<Redirect to="/404"/>
					</Route>
				</Switch>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
