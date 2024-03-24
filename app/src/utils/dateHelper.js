export const getDateString = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
};

export const parseDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    return new Date(`20${year}`, month - 1, day); 
};

export const isDateInRange = (date, startDate, endDate) => {
    return date >= parseDate(startDate) && date <= parseDate(endDate);
};
