import { CSV } from 'react-native-csv';

const parseValue = (value) => {
  if (!isNaN(value) && value !== '' && !value.match(/[^0-9.]/)) {
    return parseFloat(value);
  }
  if (value === '') {
    return value;
  }
  return value;
};

const readCSVFromDevice = async (filePath) => {
  try {
    const csvData = await fetch(filePath);
    const text = await csvData.text();
    const results = [];

    // Parse CSV data
    const parsedData = CSV.parse(text);

    // Convert keys to camel case and parse values
    parsedData.forEach((row, index) => {
      if (index === 0) return; // Skip header row
      const camelCaseRow = {};
      row.forEach((value, idx) => {
        const key = parsedData[0][idx]; // Assuming the first row is the header
        const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
        camelCaseRow[camelCaseKey] = parseValue(value);
      });
      results.push(camelCaseRow);
    });

    //logger.info(`Read ${results.length} records from ${filePath}`);
    return results;
  } catch (error) {
    //logger.error(`Error reading CSV file from: ${filePath}`, error);
    throw new Error(`Error reading CSV file from: ${filePath}`);
  }
};

export default readCSVFromDevice;
