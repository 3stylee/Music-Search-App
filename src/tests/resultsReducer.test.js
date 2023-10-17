import resultsReducer from '../redux/reducers/resultsReducer';
import * as actions from '../redux/actions/resultsActions';

it('Should clear results when passed CLEAR_RESULTS', () => {
	const initialState = [{ song: 'A' }, { song: 'B' }];

	const action = actions.clearResults();
	const newState = resultsReducer(initialState, action);

	expect(newState.length).toEqual(0);
});

it('Should append a new set of results to the results array when passed LOAD_RESULTS_SUCCESS', () => {
	const initalState = [{ song: 'A' }, { song: 'B' }];

	const action = actions.loadResultsSuccess([{ song: 'C' }]);
	const newState = resultsReducer(initalState, action);

	expect(newState.length).toEqual(3);
	expect(newState[0].song).toEqual('A');
	expect(newState[1].song).toEqual('B');
	expect(newState[2].song).toEqual('C');
});
