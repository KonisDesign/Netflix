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
    // Find the user in the database
    const user = await User.findOne({ Email: Email });

    if (!user) {
      // Unauthorized
      return res.status(401).json({ error: 'Email ou mot de passe invalide' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      // Unauthorized
      return res.status(401).json({ error: 'Email ou mot de passe invalide' });
    }

    // Create a JWT token with the user id as payload
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '24h' });
    
    res.json({ token });
  } catch (error) {
    console.error(error);
    // Internal server error
    res.status(500).json({ error: 'Internal server error' });
  }
};