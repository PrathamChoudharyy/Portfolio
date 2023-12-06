const excelUtils = require('../utils/excelUtils');

exports.saveContact = (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const data = { firstName, lastName, email, phone, message };
  excelUtils.saveToExcel(data);

  res.json({ code: 200, message: 'Message sent successfully' });
};
