const express = require("express");
const {
    createRequest,
    getRequests,
    updateRequestStatus
} = require("../controllers/RequestController");

const router = express.Router();

router.post("/", createRequest);
router.get("/", getRequests);
router.put("/:id", updateRequestStatus);

module.exports = router;