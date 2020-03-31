const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { key: avatar } = req.file;
    const { name, email } = req.body;

    const user = await User.create({ 
      name, 
      email,
      avatar
    });

    return res.json(user);
  },

};