import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

function App() {
	return (
		<div className="App" style={{"background-color": "#7E618D"}}>
			
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">Navbar</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Switches</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Guides
								</a>
								<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a class="dropdown-item" href="#">Switch Types</a></li>
									<li><a class="dropdown-item" href="#">Switch Pins</a></li>
									<li><hr class="dropdown-divider"/></li>
									<li><a class="dropdown-item" href="#">Switch Companies</a></li>
								</ul>
							</li>

						</ul>
					</div>
				</div>
			</nav>

			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/example">
					<ProductPage />
				</Route>
			</Switch>

			

			<footer className="bd-footer p-3 p-md-5 mt-5 bg-dark text-center text-sm-center">
				<div className="container">
					<ul className="bd-footer-links ps-0 mb-3">

					</ul>
				</div>

			</footer>
		</div>
	);
}

export default App;
