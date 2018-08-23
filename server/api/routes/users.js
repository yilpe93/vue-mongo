const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find().sort('last_name');
  res.send(users);
});

router.post('/', async (req, res) => {
  let new_user = new User(req.body);
  new_user = await new_user.save();

  res.send(new_user);
});

router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id);
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  res.send(user);
});

module.exports = router;