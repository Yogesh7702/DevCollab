const Project = require("../models/Project");
const joinRequest = require("../models/JoinRequest");
const JoinRequest = require("../models/JoinRequest");

const createProject = async (req, res) => {
  try {
    const { title, description, techStack } = req.body;

    if (!title || !description || !techStack) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const project = await Project.create({
      title,
      description,
      techStack,
      owner: req.user._id,
      members: [req.user._id],
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("owner", "name email")
      .populate("members", "name email");

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("owner", "name email")
      .populate("members", "name email");

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const requestToJoinProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.owner.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: "Owner cannot join own project" });
    }

    if (project.members.includes(req.user._id)) {
      return res.status(400).json({ message: "Alreadya member" });
    }

    const existingRequest = await joinRequest.findOne({
      project: project._id,
      user: req.user._id,
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Request already sent" });
    }

    const request = await JoinRequest.create({
      project: project._id,
      user: req.user._id,
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function getJoinRequests(req, res) {
  try {
    const ownerId = req.user.id;

    const projects = await Project.find({ owner: ownerId }).populate(
      "joinRequests.user",
      "name email",
    );

    const requests = [];

    projects.forEach((project) => {
      project.joinRequests.forEach((r) => {
        if (r.status === "pending") {
          requests.push({
            projectId: project._id,
            projectTitle: project.title,
            user: r.user,
          });
        }
      });
    });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function handleJoinRequest(req, res) {
  try {
    const { projectId, userId, action } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const request = project.joinRequests.find(
      (r) => r.user.toString() === userId,
    );

    if (!reuest) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (action === "accept") {
      project.members.push(userId);
      request.status = "accepted";
    } else if (action === "reject") {
      request.status = "rejected";
    }

    await project.save();

    res.status(200).json({ mesage: "Request handled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  requestToJoinProject,
  getJoinRequests,
  handleJoinRequest,
};
