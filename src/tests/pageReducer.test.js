import pageReducer from '../redux/reducers/pageReducer';
import * as actions from '../redux/actions/pageActions';

it('Should decrement the page by 1 when passed REVERT_PAGE_BACK', () => {
	const initialState = 7;

	const action = actions.revertPageBack();
	const newState = pageReducer(initialState, action);

	expect(newState).toEqual(6);
});

it('Should update the page value when passed UPDATE_PAGE', () => {
	const initialState = 7;

	const action = actions.updatePage(10);
	const newState = pageReducer(initialState, action);

	expect(newState).toEqual(10);
});
