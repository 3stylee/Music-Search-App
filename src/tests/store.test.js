import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers';
import initalState from '../redux/initalState';
import * as resultsActions from '../redux/actions/resultsActions';

it('Should handle loading results', () => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState: initalState,
	});
	const results = [{ song: 'foo' }, { song: 'bar' }, { song: 'baz' }];

	const action = resultsActions.loadResultsSuccess(results);
	store.dispatch(action);

	const newResults = store.getState().results;
	expect(newResults[0].song).toEqual('foo');
	expect(newResults[1].song).toEqual('bar');
	expect(newResults[2].song).toEqual('baz');
});
