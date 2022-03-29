import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Current Players text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Current players/i);
  expect(linkElement).toBeInTheDocument();
});
