const { COMMANDS_OBJECT } = require('./constants/commands');

function workingWithCommandFile(command, fileWithType, newFileType, content) {
  COMMANDS_OBJECT[command]
    ? COMMANDS_OBJECT[command]({
        fileType: fileWithType,
        newFileType,
        content,
      })
    : (() => {
        console.log(`command currently does not exist.`);
      })();
}
module.exports = workingWithCommandFile;
