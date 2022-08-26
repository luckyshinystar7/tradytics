const jwt = require('jsonwebtoken');

const secret = 'apenasParaAprendizado';

const adminVerifier = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) res.status(401).json({ message: 'Token not found' });

    const payload = jwt.verify(token, secret);
    const { admin } = payload.data;

    if (!admin) res.status(403).json({ message: 'Restricted access' });
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = adminVerifier;