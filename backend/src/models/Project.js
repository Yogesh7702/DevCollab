const mongoose = reuire("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description:{
            type: String,
            required: true
        },

        techStack: {
            type: [String],
            required: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: "true"
        },

        members: [
            {
                type:mongoose.Schema.TypeS.ObjectId,
                ref: "User"
            }
        ],

        status: {
            type: String,
            enum: ["open", "closed"],
            default: "open"
        }
    },  {timestamps: true}
);

module.exports = mongoose.model("Project", projectSchema);