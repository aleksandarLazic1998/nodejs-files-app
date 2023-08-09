const fsPromises = require('fs/promises');
const path = require('path');
const pathToTextFiles = require('../constants/pathToTextFiles');

async function addContent(filePath, content) {
  try {
    await fsPromises.writeFile(path.join(pathToTextFiles, filePath), content);
    console.log('The content was added successfully.');
  } catch (e) {
    console.log('An error occurred while removing the file: ');
    console.log(e);
  }
}
module.exports = addContent;
