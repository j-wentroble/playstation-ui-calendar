// src/utils/dateUtils.js
import { parse, isValid } from 'date-fns';

export const isValidDate = (year, month) => {
  const date = parse(`${year}-${month}-01`, 'yyyy-MM-dd', new Date());
  return isValid(date);
};
