import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from '@/src/components/sidebar';

describe('Sidebar Component', () => {
  test('renders sidebar component', () => {
    render(<Sidebar />);
  });

  test('renders sidebar information section', () => {
    const { getByText, getByAltText } = render(<Sidebar />);

    expect(getByText('Ihsan Nurul Habib')).toBeInTheDocument();
    expect(getByText('Frontend developer')).toBeInTheDocument();
    expect(getByAltText('Ihsan Nurul Habib')).toBeInTheDocument();
  });

  test('toggles sidebar active class on button click', async () => {
    const event = userEvent.setup();
    render(<Sidebar />);
    const sidebarElement = screen.getByRole('complementary');
    const showContactsButton = screen.getByRole('button', {
      name: /show contacts/i,
    });

    expect(sidebarElement).not.toHaveClass('active');

    await event.click(showContactsButton);
    expect(sidebarElement).toHaveClass('active');

    await event.click(showContactsButton);
    expect(sidebarElement).not.toHaveClass('active');
  });
});
