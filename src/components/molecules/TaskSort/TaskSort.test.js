import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskSort } from './TaskSort';
import '@testing-library/jest-dom';
import { FILTER } from '../../../shared/Constants'

describe('TaskSort', () => {
  const onChangeFilter = jest.fn();
  const filterValue = FILTER.ALL;

  test('renders TaskSort with correct filter buttons', () => {
    const { getByText } = render(
      <TaskSort onChangeFilter={onChangeFilter} filterValue={filterValue} />
    );

    const allButton = getByText(FILTER.ALL);
    const activeButton = getByText(FILTER.ACTIVE);
    const completedButton = getByText(FILTER.COMPLETED);

    expect(allButton).toBeInTheDocument();
    expect(activeButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });

  test('calls onChangeFilter with "Active" value when a filter button is clicked', () => {
    const { getByText } = render(
      <TaskSort onChangeFilter={onChangeFilter} filterValue={filterValue} />
    );

    const activeButton = getByText(FILTER.ACTIVE);

    fireEvent.click(activeButton);

    expect(onChangeFilter).toHaveBeenCalledWith(FILTER.ACTIVE);
  });

  test('calls onChangeFilter with "All" value when a filter button is clicked', () => {
    const { getByText } = render(
      <TaskSort onChangeFilter={onChangeFilter} filterValue={filterValue} />
    );

    const allButton = getByText(FILTER.ALL);

    fireEvent.click(allButton);

    expect(onChangeFilter).toHaveBeenCalledWith(FILTER.ALL);
  });

  test('calls onChangeFilter with "Completed" value when a filter button is clicked', () => {
    const { getByText } = render(
      <TaskSort onChangeFilter={onChangeFilter} filterValue={filterValue} />
    );

    const completedButton = getByText(FILTER.COMPLETED);

    fireEvent.click(completedButton);

    expect(onChangeFilter).toHaveBeenCalledWith(FILTER.COMPLETED);
  });
});
