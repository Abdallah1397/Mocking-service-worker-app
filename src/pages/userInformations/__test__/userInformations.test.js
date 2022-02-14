import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserInformations from '../userInformations';


test('User have all informations', async () => {
    render(<UserInformations />);
    const userName = await waitFor(() => screen.getByText('Leanne Graham'));
    expect(userName).toBeInTheDocument();
})

test('if it appears in screen', async () => {
    render(<UserInformations />);
    const buttonElemnt = screen.getByRole('button', { name: 'show user information' });
    fireEvent.click(buttonElemnt);
    const username = await waitFor(() => screen.getByText('Bret'));
    expect(username).toBeInTheDocument();
})