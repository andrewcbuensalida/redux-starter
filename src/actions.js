import * as actions from "./actionTypes";

export function ADD_BUG(description) {
	return {
		type: actions.ADD_BUG,
		payload: {
			description: description,
		},
	};
}

export function REMOVE_BUG(id) {
	return {
		type: actions.REMOVE_BUG,
		payload: {
			id: id,
		},
	};
}
