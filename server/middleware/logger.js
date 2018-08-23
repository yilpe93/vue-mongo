function log(req, res, next) {
  console.log('Logging...');  // Setting req.body
  next();
};

module.exports = log;