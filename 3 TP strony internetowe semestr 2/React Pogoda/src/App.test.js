import { render, screen } from '@testing-library/react'; // Import funkcji render i screen z biblioteki testing-library/react
import App from './App'; // Import głównego komponentu App, który będziemy testować

test('renders learn react link', () => {
  render(<App />); // Renderowanie komponentu App do wirtualnego DOM za pomocą funkcji render z testing-library
  const linkElement = screen.getByText(/learn react/i); // Próba znalezienia elementu tekstu "learn react" na ekranie
  expect(linkElement).toBeInTheDocument(); // Oczekiwanie, że znaleziony element będzie widoczny w dokumencie (DOM)
});