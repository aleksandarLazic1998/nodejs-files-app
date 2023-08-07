const { COMMANDS_OBJECT } = require('./constants/commands');

function workingWithCommandFile(command, fileWithType, newFileType) {
  COMMANDS_OBJECT[command]({ fileType: fileWithType, newFileType });
}
module.exports = workingWithCommandFile;
