import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { server } from '../../../mocks/server';
import { reset, rest } from 'msw';
import UserInformations from '../userInformations';


// with using async we need to use await and findBy
test('User have all informations', async () => {
    render(<UserInformations />);
    const userName = await screen.findByText('Leanne Graham');
    expect(userName).toBeInTheDocument();
})

// or using waitFor
test('if it appears in screen', async () => {
    render(<UserInformations />);
    const buttonElemnt = screen.getByRole('button', { name: 'show user information' });
    fireEvent.click(buttonElemnt);
    const username = await waitFor(() => screen.getByText('Bret'));
    expect(username).toBeInTheDocument();
})

// test errors
test('error handlers', async () => {
    server.resetHandlers(
        rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
            res(ctx.status(404));
        })
    );
    render(<UserInformations />);
    const alrets = await waitFor(async () => await screen.findByText('Not found!'));
    expect(alrets).toBeInTheDocument();

})