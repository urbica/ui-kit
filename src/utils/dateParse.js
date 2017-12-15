export default (date) => {
  if (!date) {
    return null;
  }

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
