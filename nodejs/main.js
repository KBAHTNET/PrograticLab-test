//@ts-check
'use strict';

import { genCombination } from './utils.js'

const main = () => {
  console.log(genCombination(200, '3+2')[0]);
};

main();