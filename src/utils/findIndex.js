export default (items, func) => {
  let index = -1;
  items.some((el, i) => {
    if (func(el)) {
      index = i;
      return true;
    }
    return false;
  });

  return index;
};
