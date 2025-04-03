const express = require("express");
const { register, login, logout, getProfile, updateProfile, resetPassword, dashboard } = require("../controllers/authController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard",protect, dashboard);
router.get("/profile", getProfile);
router.put("/profile", updateProfile);
router.post("/reset-password", resetPassword);

module.exports = router;
