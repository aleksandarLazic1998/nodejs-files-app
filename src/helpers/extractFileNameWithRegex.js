function extractFileNameWithRegex(inputString) {
  // This regex pattern matches any word characters before and after a dot (file extension).
  const match = inputString.match(/\S+\.\S+/);

  if (!match) {
    return { error: true, value: null, message: 'File extension not found.' };
  }

  const result = match[0];
  return { error: false, value: result, message: null };
}

module.exports = extractFileNameWithRegex;
