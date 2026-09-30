const Request = require("../models/Request");

const createRequest = async (req, res) => {
    try {
        const { sender, receiver, skill, message } = req.body;

        const request = new Request({
            sender,
            receiver,
            skill,
            message
        });

        await request.save();

        res.status(201).json({
            message: "Skill request sent successfully",
            request
        });
    } catch (error) {
        res.status(500).json({
            message: "Request creation failed",
            error: error.message
        });
    }
};

const getRequests = async (req, res) => {
    try {
        const requests = await Request.find()
            .populate("sender", "name email")
            .populate("receiver", "name email")
            .populate("skill", "name category");

        res.status(200).json({
            requests
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch requests",
            error: error.message
        });
    }
};

const updateRequestStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!["Accepted", "Rejected"].includes(status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }

        const request = await Request.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!request) {
            return res.status(404).json({
                message: "Request not found"
            });
        }

        res.status(200).json({
            message: `Request ${status.toLowerCase()} successfully`,
            request
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update request",
            error: error.message
        });
    }
};

module.exports = {
    createRequest,
    getRequests,
    updateRequestStatus
};