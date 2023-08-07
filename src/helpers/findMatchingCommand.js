const { COMMANDS_ARRAY } = require('../constants/commands');

function findMatchingCommand(text) {
  for (const word of COMMANDS_ARRAY) {
    if (text.includes(word)) {
      return { error: false, value: word, message: null };
    }
  }
  return {
    error: true,
    value: null,
    message: 'No matching command was found.',
  };
}

module.exports = findMatchingCommand;
