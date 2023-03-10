const validadeName = (req, res, next) => {
  const { name } = req.body;
  const warning = '"name" length must be at least 5 characters long';
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) return res.status(422).json({ message: warning });
  next();
};

module.exports = {
  validadeName,
};