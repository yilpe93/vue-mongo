const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: '',
  last_name: '',
  email: '',
  Created_date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
