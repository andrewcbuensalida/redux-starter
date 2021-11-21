//when creating a new action, start here, then actions.js, then reducer.js
// remember redux pattern has five files, actionTypes which is just variables that point to strings, actions which are functions that take in data and return an object for the dispatcher that contain type and payload, reducer which takes in state and action and has switch conditions which return the new state with the action.payload, based on action.type, and store which imports createStore from the redux library uses that which takes in the reducer to create a store to be used in index.
export const ADD_BUG = "addBug";
export const REMOVE_BUG = "removeBug";
export const SET_RESOLVED = "setResolved";
