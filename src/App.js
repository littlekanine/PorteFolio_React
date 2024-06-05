import CustomRoutes from './component/routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.scss';

function App() {
	return (
		<div>
			<Router>
				<CustomRoutes />
			</Router>
		</div>
	);
}

export default App;
