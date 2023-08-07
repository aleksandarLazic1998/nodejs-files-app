function getNewFilenameFromSubstring(str) {
  const startIndex = str.indexOf('with the:') + 'with the:'.length;
  const newFilename = str.slice(startIndex).trim();
  return newFilename;
}

module.exports = getNewFilenameFromSubstring;
