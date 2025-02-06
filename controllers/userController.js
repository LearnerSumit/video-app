const User = require("../models/User");
const Media = require("../models/Media");

exports.userInfo = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch user details
    const user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch all media uploaded by this user
    const media = await Media.find({ user: userId });

    res.status(200).json({
      message: "User details and uploaded media",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
      media,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
