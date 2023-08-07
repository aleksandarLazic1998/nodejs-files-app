const extractFileNameWithRegex = require('./helpers/extractFileNameWithRegex');
const findMatchingCommand = require('./helpers/findMatchingCommand');
const workingWithCommandFile = require('./workingWithCommandFile');

async function fileEmitListener(fileEmitter) {
  fileEmitter.on('change', async (fileData) => {
    const command = findMatchingCommand(fileData).value;
    const fileThatWeAreWorkingOn = extractFileNameWithRegex(fileData).value;
    workingWithCommandFile(command, fileThatWeAreWorkingOn);
  });
}

module.exports = fileEmitListener;
