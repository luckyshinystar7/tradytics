const jwt = require('jsonwebtoken');

const secret = 'apenasParaAprendizado';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) res.status(401).json({ message: 'Token not found' });

    const payload = jwt.verify(token, secret);
    const { username, admin } = payload;
    req.body.username = username;
    req.body.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = auth;
