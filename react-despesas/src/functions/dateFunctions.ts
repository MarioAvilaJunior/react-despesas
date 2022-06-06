/** Return the current year and month in the YYYY-MM format */
export const getCurrentData = (): string => {
  return new Date().toISOString().slice(0, 7);
};
