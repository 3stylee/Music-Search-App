import * as apiStatusActions from '../redux/actions/apiStatusActions';
import * as types from '../redux/actions/actionTypes';

it('Should create a BEGIN_API_CALL action', () => {
	const expectedAction = {
		type: types.BEGIN_API_CALL,
	};

	const action = apiStatusActions.beginApiCall();

	expect(action).toEqual(expectedAction);
});

it('Should create a API_CALL_ERROR action', () => {
	const expectedAction = {
		type: types.API_CALL_ERROR,
	};

	const action = apiStatusActions.apiCallError();

	expect(action).toEqual(expectedAction);
});
