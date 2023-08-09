const extractFileNameWithRegex = require('./helpers/extractFileNameWithRegex');
const findMatchingCommand = require('./helpers/findMatchingCommand');
const getContent = require('./helpers/getContent');
const getNewFilenameFromSubstring = require('./helpers/getNewFilenameFromSubstring');
const workingWithCommandFile = require('./workingWithCommandFile');

async function fileEmitListener(fileEmitter) {
  fileEmitter.on('change', async (fileData) => {
    const command = findMatchingCommand(fileData).value;
    const fileThatWeAreWorkingOn = extractFileNameWithRegex(fileData).value;

    let newTextFile = '';
    if (command === 'rename the file') {
      newTextFile = getNewFilenameFromSubstring(fileData);
    }

    let content = '';
    if (command === 'add to the file') {
      content = getContent(fileData);
    }

    workingWithCommandFile(
      command,
      fileThatWeAreWorkingOn,
      newTextFile,
      content,
    );
  });
}

module.exports = fileEmitListener;
