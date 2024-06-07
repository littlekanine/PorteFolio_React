import CustomRoutes from './component/routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/styles.scss';

function App() {
	return (
		<div className="height-full">
			<Router>
				<CustomRoutes />
			</Router>
		</div>
	);
}

export default App;
