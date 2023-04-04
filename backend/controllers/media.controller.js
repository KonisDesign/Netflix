const MediaModel = require("../models/media.model");

module.exports.getMedia = async (req, res) => {
    const posts = await MediaModel.find();
    res.status(200).json(posts)
}