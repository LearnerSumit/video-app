const Media = require("../models/Media");

exports.uploadMedia = async (req, res) => {
  try {
    if (!req.file || !req.file.path) return res.status(400).json({ error: "No file uploaded" });

    const newMedia = new Media({
      userId: req.user.id,
      fileUrl: req.file.path,
      fileType: req.file.mimetype,
    });

    await newMedia.save();
    res.json(newMedia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().populate("userId", "name");
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
