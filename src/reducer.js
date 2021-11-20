let id = 0;

// if state is not defined, set state to an empty array
export default function reducer(state = [], action) {
	switch (action.type) {
		case "addBug":
			return [
				...state,
				{
					id: id++,
					description: action.payload.description,
					resolved: false,
				},
			];
		case "removeBug":
			return state.filter((bug) => bug.id != action.payload.id);
		default:
			return state;
	}
}
