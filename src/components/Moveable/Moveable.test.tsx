import { render, screen } from '@testing-library/react';
import { Theme } from '../../utils/themes';
import Moveable from './Moveable';

test('renders learn react link', () => {
    render(
        <Moveable theme={Theme.Windows11} display={true}>
            TestText
        </Moveable>
    );
    const linkElement = screen.getByText(/TestText/i);
    expect(linkElement).toBeInTheDocument();
});
