import * as pageActions from '../redux/actions/pageActions';
import * as types from '../redux/actions/actionTypes';

it('Should create a UPDATE_PAGE action', () => {
	const expectedAction = {
		type: types.UPDATE_PAGE,
	};

	const action = pageActions.updatePage();

	expect(action).toEqual(expectedAction);
});

it('Should create a REVERT_PAGE_BACK action', () => {
	const expectedAction = {
		type: types.REVERT_PAGE_BACK,
	};

	const action = pageActions.revertPageBack();

	expect(action).toEqual(expectedAction);
});
