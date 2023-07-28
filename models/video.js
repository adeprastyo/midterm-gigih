const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  thumbnailUrl: { required: true, type: String },
  youtubeUrl: { required: true, type: String },
  comments: { required: false, type: Array },
  products: { required: false, type: Array },
});

module.exports = mongoose.model("Video", videoSchema);
