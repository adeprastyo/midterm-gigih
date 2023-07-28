const express = require("express");
const Video = require("../models/video");
const router = express.Router();

// GET all /videos
router.get("/videos", async (req, res) => {
  try {
    const allVideos = await Video.find();
    res.json(allVideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET one /videos/:id
router.get("/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /videos
router.post("/videos", (req, res) => {
  const video = new Video({
    title: req.body.title,
    description: req.body.description,
    thumbnailUrl: req.body.thumbnailUrl,
    youtubeUrl: req.body.youtubeUrl,
    comments: req.body.comments,
    products: req.body.products,
  });

  try {
    const videoResult = video.save();
    res.status(200).json({
      message: "Video berhasil ditambahkan!",
      data: video,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /videos/delete/:id
router.delete("/videos/delete/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    const id = req.params.id;
    const deletedVideoData = await Video.findByIdAndDelete(id);
    res.send(`Video ${video.title} successfully deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH /videos/update/:id
router.patch("/videos/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedVideoData = req.body;
    const option = { new: true };

    const result = await Video.findByIdAndUpdate(id, updatedVideoData, option);

    res.send({ message: "berhasil update data ", result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
