const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.id
    ).select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load profile",
    });
  }
};

// Create Employee
exports.createEmployee = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password,
      role,
      department,
    } = req.body;

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "Employee already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const employee =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
        role:
          role || "employee",
        department:
          department || "General",
      });

    res.status(201).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};
exports.getAllUsers =
  async (req, res) => {
    try {
      const users =
        await User.find()
          .select("-password")
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };