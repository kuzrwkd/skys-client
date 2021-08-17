import { render, screen } from '@testing-library/react';
import Home from '@/pages';

it('Should render hello text', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to Nextjs')).toBeInTheDocument();
});
