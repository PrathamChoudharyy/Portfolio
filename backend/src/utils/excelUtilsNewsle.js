const xlsx = require('xlsx');
const fs = require('fs');

const saveEmailToExcel = (email) => {
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([{ EMAIL: email }]);

  xlsx.utils.book_append_sheet(workbook, worksheet, 'Subscribers');

  // Use asynchronous file writing
  fs.writeFile('subscribers.xlsx', xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' }), (err) => {
    if (err) throw err;
    console.log('Email saved to Excel successfully.');
  });
};

module.exports = { saveEmailToExcel };
