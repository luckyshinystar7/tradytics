const express = require('express');
const User = require('../models/User');

const app = express();
app.use(express.json());

const post = async (req, res) => {
  try {
    const validation = await User.validate(req.body);
    if (validation.error) {
      res.status(400).json(validation);
      return;
    }
    const insert = await User.insert(req.body);
    return res.status(201).json(insert);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const get = async (_req, res) => {
  try {
    const result = await User.get();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await User.getById(id);
    if (!result || result === []) return res.status(404).json({ message: 'User Not Found' });
    res.status(200).json(result);
    return;
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const put = async (req, res) => {
  try {
    const validation = await User.validate(req.body);
    if (validation.error) {
      res.status(400).json(validation);
      return;
    }
    const id = Number(req.params.id);
    const edit = await User.edit(id, req.body);
    return res.status(200).json(edit);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  post,
  get,
  getById,
  put,
};