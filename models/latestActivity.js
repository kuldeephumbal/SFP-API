const mongoose = require('mongoose');

const latestActivitySchema = new mongoose.Schema(
    {
        activity_detail: {
            type: String,
            required: true,
            trim: true
        },
        photo: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        likedBy: {
            type: [String], // Store IP or session identifiers
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('LatestActivity', latestActivitySchema);
