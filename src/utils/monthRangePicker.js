export const checkMonths = (startMonth, endMonth) => {
  if (endMonth === null) {
    return ({ startMonth, endMonth: startMonth });
  }

  if (startMonth > endMonth) {
    return ({ startMonth: endMonth, endMonth: startMonth });
  }

  return ({ startMonth, endMonth });
};

export const isActive = (month, startMonth, endMonth) => {
  if (startMonth === null && endMonth === null) {
    return false;
  }

  if (endMonth === null) {
    return startMonth === month;
  }

  return startMonth <= month && endMonth >= month;
};
