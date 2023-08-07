const fsPromises = require('fs/promises');
const path = require('path');

const COMMANDS_OBJECT = {
  'create a file': (fileWithType) => {
    createAFile(fileWithType);
  },
  'delete the file': '',
  'rename the file': '',
  'add to the file': '',
};

const COMMANDS_ARRAY = [
  'create a file',
  'delete the file',
  'rename the file',
  'add to the file',
];

async function createAFile(fileWithType) {
  const pathnameToCreatedFile = path.join(__dirname, fileWithType);

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

function workingWithCommandFile(command, fileWithType) {
  COMMANDS_OBJECT[command](fileWithType);
}

function extractFileNameWithRegex(inputString) {
  // This regex pattern matches any word characters before and after a dot (file extension).
  const match = inputString.match(/\S+\.\S+/);

  if (!match) {
    return { error: true, value: null, message: 'File extension not found.' };
  }

  const result = match[0];
  return { error: false, value: result, message: null };
}

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

async function fileEmitListener(fileEmitter) {
  fileEmitter.on('change', async (fileData) => {
    const command = findMatchingCommand(fileData).value;
    const fileThatWeAreWorkingOn = extractFileNameWithRegex(fileData).value;
    workingWithCommandFile(command, fileThatWeAreWorkingOn);
  });
}

async function openFileAndReadIt(filename) {
  const pathnameToCommandFile = path.join(__dirname, filename);

  try {
    const fileEmitter = await fsPromises.open(pathnameToCommandFile, 'r');

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

async function startTheCode() {
  watcherFunctionality();
}
startTheCode();
