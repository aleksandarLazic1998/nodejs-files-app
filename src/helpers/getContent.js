function getContent(data) {
  const keyword = 'content:';
  const startIndex = data.indexOf(keyword) + keyword.length;

  const content = data.slice(startIndex);
  return content.trim();
}
module.exports = getContent;
