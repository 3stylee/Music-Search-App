import * as resultsActions from '../redux/actions/resultsActions';
import * as types from '../redux/actions/actionTypes';
import { results as mockResults } from '../mockData';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import configureMockStore from 'redux-mock-store';

// const middleware = [thunk];
// const mockStore = configureMockStore(middleware);

// describe('Async api call', () => {
// 	afterEach(() => {
// 		fetchMock.restore();
// 	});
// 	it('Should create BEGIN_API_CALL and LOAD_RESULTS_SUCCESS when loading results', () => {
// 		fetchMock.mock(
// 			{ url: '*', headers: { 'content-type': 'application/json' } },
// 			mockResults
// 		);

// 		const expectedActions = [
// 			{ type: types.BEGIN_API_CALL },
// 			{ type: types.LOAD_RESULTS_SUCCESS, mockResults },
// 		];

// 		const store = mockStore({ courses: [] });
// 		return store.dispatch(resultsActions.loadResults()).then(() => {
// 			expect(store.getActions()).toEqual(expectedActions);
// 		});
// 	});
// });

it('Should create a LOAD_RESULTS_SUCCESS action', () => {
	const results = mockResults;
	const expectedAction = {
		type: types.LOAD_RESULTS_SUCCESS,
		results,
	};

	const action = resultsActions.loadResultsSuccess(results);

	expect(action).toEqual(expectedAction);
});

it('Should create a CLEAR_RESULTS action', () => {
	const expectedAction = {
		type: types.CLEAR_RESULTS,
	};

	const action = resultsActions.clearResults();

	expect(action).toEqual(expectedAction);
});
