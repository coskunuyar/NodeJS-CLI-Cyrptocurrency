#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key','Manage API KEY -- https://nomics.com')
    .command('check','Check Coin Price Info')
    .parse(process.argv)

// 18d2c2e7009438930e28bb49f95fa9fc