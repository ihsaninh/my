import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Resume from '@/pages/index';

jest.mock('@/src/data', () => {
  const navItems = [{ key: 'resume', label: 'Resume', url: '/' }];

  const testimonialItems = [
    {
      photo: 'https://example.com/photo1.jpg',
      name: 'John Doe',
      role: 'Tester',
      testimonial: 'Testimonial 1',
    },
  ];

  const experienceData = [
    {
      title: 'Experience 1',
      date: 'Jan 2020 - Dec 2021',
      description: 'Description 1',
    },
  ];

  const educationData = [
    {
      institution: 'University 1',
      date: '2015 - 2019',
      description: 'Description 1',
    },
  ];

  const aboutData = ['About me 1'];

  return {
    navItems,
    testimonialItems,
    experienceData,
    educationData,
    aboutData,
  };
});

describe('Resume component', () => {
  test('renders resume with correct title', () => {
    render(<Resume />);
    const titleElement = screen.getByText(/Resume/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('toggles the testimonial modal when a testimonial item is clicked', async () => {
    const user = userEvent.setup();
    render(<Resume />);

    const testimonialTitleElements = screen.getAllByText('John Doe');
    const firstTestimonialTitle = testimonialTitleElements[0];

    expect(firstTestimonialTitle).toBeInTheDocument();

    await user.click(firstTestimonialTitle);

    expect(screen.getByTestId('modal-container')).toHaveClass('active');
    expect(screen.getByTestId('overlay')).toHaveClass('active');

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);

    expect(screen.getByTestId('modal-container')).not.toHaveClass('active');
    expect(screen.getByTestId('overlay')).not.toHaveClass('active');
  });
});
