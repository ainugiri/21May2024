// Calculates the number of days between two dates
function calculateNoofDaysbetweenDates(date1, date2) {
  const diff = date2 - date1;
  return diff / (1000 * 60 * 60 * 24);
}   
