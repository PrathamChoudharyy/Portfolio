const excelUtils = require('../utils/excelUtilsNewsle');

exports.subscribeNewsletter = (req, res) => {
  const { EMAIL } = req.body;

  // Validate email here if needed

  // Save to Excel
  excelUtils.saveEmailToExcel(EMAIL);

  res.json({ status: 'success', message: 'Subscription successful' });
};
