to export a named export, either
export const myVar = 'hello'
OR
module.exports.myVar = 'hello'

then to import named import,
import {myVar} from './myFile'
OR
const myVar = require('./myFile').myVar
OR
const {myVar} = require('./myFile')

to export default export.
const myVar = 'hello'
export default myVar
OR
export default myVar = 'hello' //DOES NOT WORK
OR
export default 'hello'
OR
const myVar = 'hello'
module.exports = myVar
OR
module.exports = 'hello'

to import a default import,
const myVar = require('./myFile')
OR
import myVar from './myFile'
OR
const myVar = require('./myFile').default IF EXPORT IS export default 'hello'

// remember redux pattern has five files, actionTypes which is just variables that point to strings, actions which are functions that take in data and return an object for the dispatcher that contain type and payload, reducer which takes in state and action and has switch conditions which return the new state with the action.payload, based on action.type, and store which imports createStore from the redux library uses that which takes in the reducer to create a store to be used in index.
