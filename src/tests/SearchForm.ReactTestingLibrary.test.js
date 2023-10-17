import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from '../Components/SearchForm';

it('Should render the filter button text correctly', () => {
	render(
		<SearchForm
			onClick={jest.fn()}
			filters={{
				Songs: true,
				Artists: true,
				Albums: true,
			}}
			onSearchChanged={jest.fn()}
			onSwitchChanged={jest.fn()}
		/>
	);

	screen.getByText('Songs');
	screen.getByText('Artists');
	screen.getByText('Albums');
});

it('Should call the onSwitchChanged function if a switch is clicked', async () => {
	const handleSwitchChange = jest.fn();
	render(
		<SearchForm
			onClick={jest.fn()}
			filters={{
				Songs: true,
				Artists: true,
				Albums: true,
			}}
			onSearchChanged={jest.fn()}
			onSwitchChanged={handleSwitchChange}
		/>
	);

	fireEvent.click(screen.getByLabelText('Songs'));
	expect(handleSwitchChange).toHaveBeenCalledTimes(1);
	fireEvent.click(screen.getByLabelText('Albums'));
	expect(handleSwitchChange).toHaveBeenCalledTimes(2);
	fireEvent.click(screen.getByLabelText('Artists'));
	expect(handleSwitchChange).toHaveBeenCalledTimes(3);
});

it('Should let the user type in the search bar', async () => {
	render(
		<SearchForm
			onClick={jest.fn()}
			filters={{
				Songs: true,
				Artists: true,
				Albums: true,
			}}
			onSearchChanged={jest.fn()}
			onSwitchChanged={jest.fn()}
		/>
	);
	const searchInput = screen.getByLabelText('Search');
	fireEvent.change(searchInput, { target: { value: 'Example Search Term' } });
	expect(searchInput).toHaveValue('Example Search Term');
});
