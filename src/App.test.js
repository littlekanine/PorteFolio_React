import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
	render(<App />);
	const rootElement = screen.getByTestId('root');
	expect(rootElement).toBeInTheDocument();
});
