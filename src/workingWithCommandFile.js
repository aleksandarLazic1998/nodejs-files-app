const { COMMANDS_OBJECT } = require('./constants/commands');

function workingWithCommandFile(command, fileWithType) {
  COMMANDS_OBJECT[command](fileWithType);
}
module.exports = Object.freeze(workingWithCommandFile);
