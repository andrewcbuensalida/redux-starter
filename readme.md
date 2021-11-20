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
