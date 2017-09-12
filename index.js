const config = require('config');

console.log(JSON.stringify(config, null, 2));
console.log(config.get('obj.value'))
console.log('changed');
