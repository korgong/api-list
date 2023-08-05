import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import HomePage from "./HomePage";

// jest.mock('../static/img/watermelon.jpg', () => '../static/img/watermelon.jpg');
describe('HomePage', () => {
    it('renders without crashing', () => {
        render(
            <HomePage />
        );
        let HomePageText = screen.getByText('home page');
        expect(HomePageText).toBeInTheDocument();
    });
});
