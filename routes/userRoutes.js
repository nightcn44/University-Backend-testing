const express = require("express");
const router = express.Router();
const User = require("../controllers/userControllers");

router.get("/users", User.getAllUsers);
router.post("/user", User.createUser);
router.get("/user/:id", User.getUserById);
router.put("/user/:id", User.updateUserById);
router.delete("/user/:id", User.deleteUserById);

module.exports = router;
