import {render} from '@testing-library/react';
import Home from '@/app/page';

it('Should render hello text', () => {
  const component = render(<Home />);
  const target = component.getByRole('heading');
  expect(target).toBeInTheDocument();
});
