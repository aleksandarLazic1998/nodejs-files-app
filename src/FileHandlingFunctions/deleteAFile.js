const fsPromises = require('fs/promises');
const path = require('path');

const pathToTextFiles = require('../constants/pathToTextFiles');

async function deleteAFile(fileWithType) {
  try {
    await fsPromises.rm(path.join(pathToTextFiles, fileWithType));
  } catch (error) {
    console.log(error, 'Could not delete the file, file probably not existing');
  }
}

module.exports = deleteAFile;
