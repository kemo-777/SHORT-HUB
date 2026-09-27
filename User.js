const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tier: { type: String, default: 'free' }, // free, pro, enterprise
    storageUsed: { type: Number, default: 0 }, // بالبايت أو الميجا
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);