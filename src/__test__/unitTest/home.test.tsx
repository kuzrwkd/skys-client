import { render } from '@testing-library/react';

import Home from '@/pages';

it('Should render hello text', () => {
  const component = render(<Home />);
  const target = component.getByRole('heading');
  expect(target).toBeInTheDocument();
});
