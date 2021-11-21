import { ADD_BUG, REMOVE_BUG, SET_RESOLVED } from "./actions";
import store from "./store";

// subscribe fires whenever state is changed
// subscribe returns a function to unsubscribe. to unsubscribe, just unsubscribe()
const unsubscribe = store.subscribe(() => {
	console.log(`state changed`);
	document.querySelector("#bugs").innerText = null;
	// rendering the list of bugs
	store.getState().forEach((bug) => {
		// creating the whole list element
		const bugElement = document.createElement("li");
		bugElement.innerText = `Description: ${bug.description}`;

		// creating the div that has resolved? and checkbox
		const resolvedAndCheckbox = document.createElement("div");
		resolvedAndCheckbox.innerText = "Resolved? ";
		const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		// if bug status is resolved, should be checked
		if (bug.resolved == true) {
			checkbox.setAttribute("checked", true);
		}
		checkbox.addEventListener("change", () => {
			store.dispatch(SET_RESOLVED(bug.id));
		});
		resolvedAndCheckbox.appendChild(checkbox);
		bugElement.appendChild(resolvedAndCheckbox);

		const removeButton = document.createElement("button");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", (e) => {
			// the object inside dispatch is the action object in the reducer
			store.dispatch(REMOVE_BUG(bug.id));
		});
		bugElement.appendChild(removeButton);

		document.querySelector("#bugs").appendChild(bugElement);
	});
	console.log(`This is store.getState()`);
	console.log(store.getState());
});

document.querySelector("#submit").addEventListener("click", (e) => {
	e.preventDefault();
	const description = document.querySelector("#inputText").value;
	document.querySelector("#inputText").value = null;

	store.dispatch(ADD_BUG(description));
});
