import apiStatusReducer from '../redux/reducers/apiStatusReducer';
import * as actions from '../redux/actions/apiStatusActions';

it('Should increment apiCallsInProgress when passed BEGIN_API_CALL', () => {
	const initalState = 0;

	const action = actions.beginApiCall();
	const newState = apiStatusReducer(initalState, action);

	expect(newState).toEqual(1);
});

it('Should decrement apiCallsInProgress when passed API_CALL_ERROR', () => {
	const initalState = 1;

	const action = actions.apiCallError();
	const newState = apiStatusReducer(initalState, action);

	expect(newState).toEqual(0);
});
