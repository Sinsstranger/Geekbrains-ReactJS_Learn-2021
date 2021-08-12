import "./assets/sass/main.sass";
import Message from "./components/Message";

const App = () => {
	return (
		<>
			<header className="header">
				It's Header
			</header>
			<main className="main">
				Next text resolved from child component: &#9660;<Message text='I mean that ReactJs is the best way to make complicated reactive web apps'/>
			</main>
			<footer className="footer">
				It's Footer
			</footer>
		</>
	);
}

export default App;
