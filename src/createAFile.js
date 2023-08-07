const fsPromises = require('fs/promises');
const path = require('path');

async function createAFile(fileWithType) {
  const pathnameToCreatedFile = path.join(__dirname, 'textFiles', fileWithType);

  try {
    // Check if file exist
    const existingFile = await fsPromises.open(pathnameToCreatedFile, 'r');
    console.log('A file is already created.');
    existingFile.close();
  } catch (error) {
    const createNewFile = await fsPromises.open(pathnameToCreatedFile, 'w');
    console.log('A new file was successfully created.');
    createNewFile.close();
  }
}

module.exports = Object.freeze(createAFile);
