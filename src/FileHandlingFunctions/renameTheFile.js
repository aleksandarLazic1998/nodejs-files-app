const fsPromises = require('fs/promises');
const path = require('path');
const pathToTextFiles = require('../constants/pathToTextFiles');

async function renameTheFile(fileWithType, newFileType) {
  const oldFile = path.join(pathToTextFiles, fileWithType);
  const newFile = path.join(pathToTextFiles, newFileType);

  try {
    console.log('The file was successfully renamed.');
    await fsPromises.rename(oldFile, newFile);
    console.log('The file was successfully renamed.');
  } catch (error) {
    return {
      error: true,
      value: null,
      message: 'Error with trying to rename',
    };
  }
}

module.exports = renameTheFile;
