const mongoose = require("mongoose");

const joinRequestSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        status: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending"
        }
    },  {timestamps: true}
);

module.exports =mongoose.model("joinRequest", joinRequestSchema);