import { ADD_BUG, REMOVE_BUG } from "./actions";
import store from "./store";

// subscribe fires whenever state is changed
// subscribe returns a function to unsubscribe. to unsubscribe, just unsubscribe()
const unsubscribe = store.subscribe(() => {
	console.log(`state changed`);
	document.querySelector("#bugs").innerText = null;
	store.getState().forEach((bug) => {
		const bugElement = document.createElement("li");
		bugElement.innerText = `Description: ${bug.description}`;

		const resolvedAndCheckbox = document.createElement("div");
		resolvedAndCheckbox.innerText = "Resolved? ";
		const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("name", "resolved");
		resolvedAndCheckbox.appendChild(checkbox);
		bugElement.appendChild(resolvedAndCheckbox);

		const removeButton = document.createElement("button");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", () => {
			// the object inside dispatch is the action object in the reducer
			store.dispatch(REMOVE_BUG(bug.id));
		});
		bugElement.appendChild(removeButton);

		document.querySelector("#bugs").appendChild(bugElement);
	});
});

document.querySelector("#submit").addEventListener("click", (e) => {
	e.preventDefault();
	const description = document.querySelector("#inputText").value;
	document.querySelector("#inputText").value = null;

	store.dispatch(ADD_BUG(description));
});
