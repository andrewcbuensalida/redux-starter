import * as actions from "./actionTypes";

let id = 0;

// if state is not defined, set state to an empty array
export default function reducer(state = [], action) {
	switch (action.type) {
		case actions.ADD_BUG:
			return [
				...state,
				{
					id: id++,
					description: action.payload.description,
					resolved: false,
				},
			];
		case actions.REMOVE_BUG:
			return state.filter((bug) => bug.id != action.payload.id);
		default:
			return state;
	}
}
