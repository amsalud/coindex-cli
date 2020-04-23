const program = require('commander');
const check = require('../commands/check');

program
.command('price')
.description('Check price of coins')
.option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,BSV,LTC')
.option('--curr <currency>', 'Change the currency', 'CAD')
.action(cmd=> check.price(cmd));

program.parse(process.argv);