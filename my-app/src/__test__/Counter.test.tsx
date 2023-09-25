/*This file contains the test cases for the Counter component. 
It uses the render and fireEvent functions from the testing library
to simulate user interactions and assert the expected behavior of the component.*/
//import { expect } from '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders Counter and checks if buttons work', () => {
    const { getByText, getByTestId } = render(<Counter />);

    const counter = screen.getByTestId('counter');
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(incrementButton);
    expect(counter.textContent).toBe('Counter: 1');

    fireEvent.click(decrementButton);
    expect(counter.textContent).toBe('Counter: 0');
});
