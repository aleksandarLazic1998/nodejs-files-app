const fsPromises = require('fs/promises');
const path = require('path');

const CREATE_FILE = 'create a file';
const DELETE_FILE = 'delete the file';
const RENAME_FILE = 'rename the file';
const ADD_TO_FILE = 'add to the file';

async function fileEmitListener(fileEmitter) {
  fileEmitter.on('change', () => {});
}

async function openFileAndReadIt(filename) {
  const pathnameToCommandFile = path.join(__dirname, filename);

  try {
    const fileEmitter = await fsPromises.open(pathnameToCommandFile, 'r');

    fileEmitListener(fileEmitter);

    return fileEmitter;
  } catch (error) {
    console.log(error, 'Error with trying to read a file');
  }
}

async function watcherFunctionality() {
  const pathnameToCommandFile = path.join(__dirname, 'commands.txt');

  try {
    const watcher = fsPromises.watch(pathnameToCommandFile);
    for await (const event of watcher) {
      if (event.eventType === 'change') {
        const fileEmitter = await openFileAndReadIt(event.filename);
        fileEmitter.emit('change');
      }
    }
  } catch (err) {
    if (err.name === 'AbortError') return;
    throw err;
  }
}

async function startTheCode() {
  watcherFunctionality();
}
startTheCode();
