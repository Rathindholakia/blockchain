const Block = require('./block');

const firstBlock = Block.mineBlock(Block.genesis(), 'First data');
console.log(firstBlock.toString());
