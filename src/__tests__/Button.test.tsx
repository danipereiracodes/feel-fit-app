import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import Button from '../components/atoms/Buton';

it('renders next step button', () => {
  const onClick = vi.fn();
  render(
    <Button
      type='button'
      styles={
        'px-4 z-20 bg-gray-700 rounded-lg py-2 text-white font-normal text-lg col-span-2 place-self-end  hover:scale-110 transition duration-300 ease-in-out'
      }
      onClick={onClick}
      text='Next'
    />
  );
  const buttonElement = screen.getByText('Next');
  expect(buttonElement).not.toBe(null);
});
