import { render, fireEvent, screen } from '@testing-library/react';
import CreateUser from '../components/CreateUser'; // Correct the folder path, you wrote 'component' instead of 'components'

test('renders CreateUser and validates fields', () => {
    const { getByPlaceholderText, getByText } = render(<CreateUser />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    const button = screen.getByText('Create User');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(button);

    // You need to implement actual checks here, such as checking state or mocking handleSubmit
});
