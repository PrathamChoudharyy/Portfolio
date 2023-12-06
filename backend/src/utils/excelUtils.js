const xlsx = require('xlsx');

const saveToExcel = (data) => {
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([data]);

  xlsx.utils.book_append_sheet(workbook, worksheet, 'Contacts');

  xlsx.writeFile(workbook, 'contacts.xlsx');
};

module.exports = { saveToExcel };
