import store from "./store";

// the object inside dispatch is the action object in the reducer
store.dispatch({
	type: "addBug",
	payload: {
		description: "The worst bug of all.",
	},
});

function updateBugs() {
	document.querySelector("#bugs").innerText = null;
	store.getState().forEach((bug) => {
		const bugElement = document.createElement("li");
		bugElement.innerText = `Description: ${bug.description} - Resolved? ${bug.resolved}`;
		const removeButton = document.createElement("button");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", () => {
			store.dispatch({
				type: "removeBug",
				payload: {
					id: bug.id,
				},
			});
			updateBugs();
		});
		bugElement.appendChild(removeButton);
		document.querySelector("#bugs").appendChild(bugElement);
	});
}
updateBugs();

document.querySelector("#submit").addEventListener("click", () => {
	const description = document.querySelector("#inputText").value;
	document.querySelector("#inputText").value = null;

	store.dispatch({
		type: "addBug",
		payload: {
			description: description,
		},
	});

	updateBugs();
});
