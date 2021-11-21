// this file is also known as action creators
import * as actions from "./actionTypes";

export const ADD_BUG = (description) => ({
	type: actions.ADD_BUG,
	payload: {
		description: description,
	},
});

export const REMOVE_BUG = (id) => ({
	type: actions.REMOVE_BUG,
	payload: {
		id: id,
	},
});
