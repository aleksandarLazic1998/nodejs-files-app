function getContent(data) {
  const _idx = data.indexOf('content: ');
  const fileData = data.substring(data.length + 1, _idx + 9);

  return fileData;
}
module.exports = getContent;
