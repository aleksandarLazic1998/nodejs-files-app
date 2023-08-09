const addContent = require('../FileHandlingFunctions/addContent');
const createAFile = require('../FileHandlingFunctions/createAFile');
const deleteAFile = require('../FileHandlingFunctions/deleteAFile');
const renameTheFile = require('../FileHandlingFunctions/renameTheFile');

const COMMANDS_OBJECT = {
  'create a file': ({ fileType }) => {
    createAFile(fileType);
  },
  'rename the file': ({ fileType, newFileType }) => {
    renameTheFile(fileType, newFileType);
  },
  'delete the file': ({ fileType }) => {
    deleteAFile(fileType);
  },
  'add to the file': ({ fileType, content }) => {
    addContent(fileType, content);
  },
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
