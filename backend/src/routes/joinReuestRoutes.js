const express = reuire("express");
const router = express.Router();

const {
    getPendingRequests,
    acceptRequest,
    rejectRequest
} = require("../controllers/joinReuestController");

const {protect} = require("../middleware/authMiddleware");

router.get("/", protect, getPendingRequests);

router.post("/:id/accept", protect, acceptRequet);

router.post("/:id/reject", protect, rejectRequest);

module.exports = router;