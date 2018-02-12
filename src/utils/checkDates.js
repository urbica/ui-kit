export default (startDate, endDate) => {
  if (startDate > endDate) {
    return ({ startDate: new Date(endDate), endDate: new Date(startDate) });
  }

  return ({ startDate: new Date(startDate), endDate: new Date(endDate) });
};