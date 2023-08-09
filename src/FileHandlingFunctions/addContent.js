const fsPromises = require('fs/promises');
const path = require('path');
const pathToTextFiles = require('../constants/pathToTextFiles');

async function addContent(filePath, content) {
  console.log(filePath, content);
  try {
    await fsPromises.writeFile(path.join(pathToTextFiles, filePath), content);
  } catch (error) {
    console.log(error, 'Could not write in the file.');
  }
}
module.exports = addContent;
