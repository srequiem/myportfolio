import { Routes, Route } from 'react-router-dom';

import Home from '/src/containers/Home/Home';
import Contact from '/src/components/Contact/Contact';
import '/src/containers/App.css';


const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App;
