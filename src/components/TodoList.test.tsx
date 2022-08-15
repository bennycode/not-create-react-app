import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders an input box to create tasks', async () => {
    render(<TodoList />);
    await waitFor(() => screen.getByRole('textbox'));
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
