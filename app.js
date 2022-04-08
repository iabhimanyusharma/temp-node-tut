const _ = require('lodash');

const items = [1,[2,[3,[4,]]]];

const newItems = _.flattenDeep(items); // we are using lodash as a dependency here to flatten this array
// this functionality would not work if we hadnt installed the package.

console.log(newItems);

