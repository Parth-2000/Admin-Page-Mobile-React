import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddMobile from "./pages/AddMobile";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/add" component={AddMobile} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
