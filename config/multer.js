const multer = require('multer');
const path = require('path');

const UPLOAD_ROOT = process.env.UPLOAD_PATH || path.join(__dirname, '../uploads');

// Slider storage
const sliderStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'slider'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Member storage
const memberStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'members'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Latest Activity storage
const latestActivityStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'latest-activity'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Gallery storage
const galleryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'gallery'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Upcoming Event storage
const upcomingEventStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'events'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// CrowdFunding storage
const crowdFundingStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'crowdfunding'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Problem Raised storage
const problemRaisedStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'problems'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Our Project storage
const ourProjectStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'projects'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Donation storage
const donationStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'donations'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Member Application storage
const memberApplicationStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(UPLOAD_ROOT, 'member-applications'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Background image storage
const backgroundStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_ROOT);
    },
    filename: function (req, file, cb) {
        cb(null, `background-${Date.now()}-${file.originalname}`);
    }
});

const sliderUpload = multer({ storage: sliderStorage });
const memberUpload = multer({ storage: memberStorage });
const latestActivityUpload = multer({ storage: latestActivityStorage });
const galleryUpload = multer({ storage: galleryStorage });
const upcomingEventUpload = multer({ storage: upcomingEventStorage });
const crowdFundingUpload = multer({ storage: crowdFundingStorage });
const problemRaisedUpload = multer({ storage: problemRaisedStorage });
const ourProjectUpload = multer({ storage: ourProjectStorage });
const donationUpload = multer({ storage: donationStorage });
const memberApplicationUpload = multer({ storage: memberApplicationStorage });
const backgroundUpload = multer({ storage: backgroundStorage });

module.exports = { sliderUpload, memberUpload, latestActivityUpload, galleryUpload, upcomingEventUpload, crowdFundingUpload, problemRaisedUpload, ourProjectUpload, donationUpload, memberApplicationUpload, backgroundUpload };
