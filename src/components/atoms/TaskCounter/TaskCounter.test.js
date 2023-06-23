import React from 'react';
import { render } from '@testing-library/react';
import { TaskCounter } from './TaskCounter';
import '@testing-library/jest-dom';

describe('TaskCounter', () => {
  test('renders count correctly', () => {
    const count = 5;
    const { getByText } = render(<TaskCounter count={count} />);
    const counterElement = getByText(`${count} items left`);

    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent(`${count} item`);
  });

  test('renders "s left" when count is not 1', () => {
    const count = 5;
    const { getByText } = render(<TaskCounter count={count} />);
    const leftTextElement = getByText(/s left$/i);

    expect(leftTextElement).toBeInTheDocument();
  });

  test('does not render "s left" when count is 1', () => {
    const count = 1;
    const { queryByText } = render(<TaskCounter count={count} />);
    const leftTextElement = queryByText(/s left$/i);

    expect(leftTextElement).toBeNull();
  });
});
