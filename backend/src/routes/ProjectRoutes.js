const express = require("express");
const router = express.Router();

const {
    createProject,
     getAllProjects,
  getProjectById,
  requestToJoinProject
} = require("../controllers/projectController");

const {protect} = require("../middleware/authMiddleware");

router.post("/", protect, createProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/:id/join", protect, requestToJoinProject);
router.get(
  "/requests",
  authMiddleware,
  projectController.getJoinRequests
);

router.post(
  "/handle-request",
  authMiddleware,
  projectController.handleJoinRequest
);

module.exports = router;