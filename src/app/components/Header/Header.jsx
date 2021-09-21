import {Link} from "react-router-dom";
import './header.sass';

export const Header = (props) => {
	return (<header className="header">
		<nav className="nav">
			<Link to="/">Posts page</Link>
			<Link to="/chats/">Chats page</Link>
			<Link to="/profile/">Profile page</Link>
		</nav>
	</header>);
}