import { render, screen } from '@testing-library/react';
import HomePage from '../src/app/[locale]/page';
import '@testing-library/jest-dom';

// Mock the useTranslations hook
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: { [key: string]: string } = {
      title: 'Welcome to the HomePage',
    };
    return translations[key];
  },
}));

it('should render the title', () => {
  render(<HomePage />);
  const myTitle = screen.getByText('Welcome to the HomePage');
  expect(myTitle).toBeInTheDocument();
});
