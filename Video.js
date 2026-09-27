const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    platform: { type: String, required: true }, // tiktok, instagram, youtube
    originalUrl: { type: String, required: true },
    videoPath: { type: String, required: true }, // مسار الملف على التخزين السحابي (مثل AWS S3)
    thumbnail: { type: String },
    fileSize: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', VideoSchema);