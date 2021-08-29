import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './header.sass';

export const Header = (props) => {
	return (<header className="header">
		<nav className="nav">
			{useSelector(state => state.links).map(link => <Link key={link.link} to={link.link}>{link.anchor}</Link>)}
		</nav>
	</header>);
}