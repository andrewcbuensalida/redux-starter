import * as actions from "./actionTypes";

let id = 0;

// if state is not defined, set state to an empty array
// the reducer is the one that changes the state
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
		case actions.SET_RESOLVED:
			return state.map((bug) => {
				if (bug.id == action.payload.id) {
					return {
						...bug,
						resolved: !bug.resolved,
					};
				} else return bug;
			});
		default:
			return state;
	}
}
