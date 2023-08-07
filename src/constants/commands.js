const createAFile = require('../createAFile');

const COMMANDS_OBJECT = {
  'create a file': (fileWithType) => {
    createAFile(fileWithType);
  },
  'delete the file': '',
  'rename the file': '',
  'add to the file': '',
};

const COMMANDS_ARRAY = [
  'create a file',
  'delete the file',
  'rename the file',
  'add to the file',
];

module.exports = {
  COMMANDS_ARRAY: Object.freeze(COMMANDS_ARRAY),
  COMMANDS_OBJECT: Object.freeze(COMMANDS_OBJECT),
};
