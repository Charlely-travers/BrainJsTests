var brain = require("brain.js");

function toArray(string) { // normaïize
if (string.length !== 7 * 7) throw new Error('string in wrong size');
return string.split('').map(toNumber);
}
function toNumber(character) {
return character === '#' ? 1 : 0;
}
const zero = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#######'
);

const nine = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '###### ' +
    '    # '  +
    '   # '    +
    '  # '
);

console.log(zero);