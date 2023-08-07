const fsPromises = require('fs/promises');
const path = require('path');

const fileEmitListener = require('./fileEmitListener');

async function openFileAndReadIt(filename) {
  const pathnameToCreatedFile = path.join(__dirname, filename);

  try {
    const fileEmitter = await fsPromises.open(pathnameToCreatedFile, 'r');

    fileEmitListener(fileEmitter);

    return { error: false, value: fileEmitter, message: null };
  } catch (error) {
    return {
      error: true,
      value: null,
      message: 'Error with trying to read a file',
    };
  }
}

module.exports = openFileAndReadIt;
