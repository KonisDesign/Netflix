const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    if (!Email || !Password) {
      return res.status(400).json({ msg: "Fill the form" });
    }

    const isUsernameExist = await User.findOne({
      attributes: ["Email"],
      where: { Email: Email },
    });
    if (isUsernameExist) {
      return res.status(400).json({ msg: "user already exist" });
    }
    bcrypt.hash(Password, 10).then((hash) => {
      User.create({
        Email: Email,
        Password: hash,
      });
    });
    return res.status(200).json({ msg: "Vous êtes bien inscrit" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getUser = async (req, res) => {
  const posts = await User.find();
  res.status(200).json(posts)
}

module.exports.loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  const secretKey = 'secret';

  try {
    const user = await User.findOne({ Email: Email });

    if (!user) {
      return res.status(401).json({ error: 'Email ou mot de passe invalide' });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Email ou mot de passe invalide' });
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '24h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.updateList = async (req, res) => {
  const { list } = req.body;
  try {
    await User.update({ list }, { where: { _id: req.user._id } });
    return res.status(200).json({ message: "List updated" });
  } catch (error) {
    res.status(400).json(error);
  }
};