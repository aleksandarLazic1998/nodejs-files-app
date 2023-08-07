const fsPromises = require('fs/promises');
const path = require('path');

async function createAFile(fileWithType) {
  const filePath = path.join(__dirname, '..', 'textFiles', fileWithType);

  try {
    const fileEmitter = await fsPromises.open(filePath, 'r');
    console.log('A file is already created first time.');
    fileEmitter.close();
  } catch (error) {
    try {
      const fileEmitter = await fsPromises.open(filePath, 'w');
      console.log('A file is already created second time.');
      fileEmitter.close();
    } catch (err) {
      console.error('Error creating the file:', err);
    }
  }
}

module.exports = createAFile;
