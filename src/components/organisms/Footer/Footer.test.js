import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';
import { FILTER } from '../../../shared/Constants'

describe('Footer', () => {
  const counterValue = 2;
  const onClearCompleted = jest.fn();
  const onChangeFilter = jest.fn();
  const filterValue = FILTER.ALL;

  test('renders Footer with correct task counter', () => {
    const { getByText } = render(
      <Footer
        counterValue={counterValue}
        onClearCompleted={onClearCompleted}
        onChangeFilter={onChangeFilter}
        filterValue={filterValue}
      />
    );

    const counterElement = getByText('2 items left');

    expect(counterElement).toBeInTheDocument();
  });

  test('calls onClearCompleted when clear completed button is clicked', () => {
    const { getByText } = render(
      <Footer
        counterValue={counterValue}
        onClearCompleted={onClearCompleted}
        onChangeFilter={onChangeFilter}
        filterValue={filterValue}
      />
    );

    const clearButton = getByText('Clear completed');

    fireEvent.click(clearButton);

    expect(onClearCompleted).toHaveBeenCalledTimes(1);
  });

  test('calls onChangeFilter with correct filter value when filter buttons are clicked', () => {
    const { getByText } = render(
      <Footer
        counterValue={counterValue}
        onClearCompleted={onClearCompleted}
        onChangeFilter={onChangeFilter}
        filterValue={filterValue}
      />
    );

    const activeButton = getByText(FILTER.ACTIVE);

    fireEvent.click(activeButton);

    expect(onChangeFilter).toHaveBeenCalledWith(FILTER.ACTIVE);
  });
});
