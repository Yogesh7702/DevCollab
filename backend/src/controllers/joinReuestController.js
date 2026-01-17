const JoinRequest = require("../models/JoinRequest");
const Project = require("../models/Project");

const getpendingRequests = async (req, res) => {
    try{
    const projects = await Project.find({owner : req.user._id}).select("_id");

    const projecctIds = projects.map((p) => p._id);

    const requests = await JoinRequest.find({
       project: {$in: projectIds},
       status: "pending"
    }).populate("user", "name email")
      .populate("project", "title");

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};