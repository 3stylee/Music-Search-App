import * as types from '../actions/actionTypes';
import initialState from '../initalState';
const actionTypeEndsInSuccess = type => {
	return type.substring(type.length - 8) === '_SUCCESS';
};

export default function apiCallStatusReducer(
	state = initialState.apiCallsInProgress,
	action
) {
	switch (action.type) {
		case types.BEGIN_API_CALL:
			return state + 1;
		default:
			if (
				action.type === types.API_CALL_ERROR ||
				actionTypeEndsInSuccess(action.type)
			) {
				return state - 1;
			} else {
				return state;
			}
	}
}
