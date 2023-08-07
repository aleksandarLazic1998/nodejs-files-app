const fsPromises = require('fs/promises');
const path = require('path');
const openFileAndReadIt = require('./openFileAndReadIt');

async function watcherFunctionality() {
  const pathnameToCommandFile = path.join(__dirname, 'commands.txt');

  try {
    const watcher = fsPromises.watch(pathnameToCommandFile);
    for await (const event of watcher) {
      if (event.eventType === 'change') {
        const fileEmitter = (await openFileAndReadIt(event.filename)).value;

        const dataFromFile = (await fileEmitter.read()).buffer.toString();
        fileEmitter.emit('change', dataFromFile);
      }
    }
  } catch (err) {
    if (err.name === 'AbortError') return;
    throw err;
  }
}

module.exports = watcherFunctionality;
