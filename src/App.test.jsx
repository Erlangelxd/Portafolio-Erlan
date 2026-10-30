import { beforeEach, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = '';
  document.documentElement.style.colorScheme = '';
});

test('activates dark mode by toggling the dark class on the root element', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(document.documentElement.classList.contains('dark')).toBe(false);

  await user.click(screen.getAllByRole('button', { name: 'Oscuro' })[0]);

  expect(document.documentElement.classList.contains('dark')).toBe(true);
  expect(document.documentElement.style.colorScheme).toBe('dark');
  expect(localStorage.getItem('theme')).toBe('dark');
});

test('returns to light mode and persists the preference', async () => {
  localStorage.setItem('theme', 'dark');
  const user = userEvent.setup();
  render(<App />);

  expect(document.documentElement.classList.contains('dark')).toBe(true);

  await user.click(screen.getAllByRole('button', { name: 'Claro' })[0]);

  expect(document.documentElement.classList.contains('dark')).toBe(false);
  expect(document.documentElement.style.colorScheme).toBe('light');
  expect(localStorage.getItem('theme')).toBe('light');
});
