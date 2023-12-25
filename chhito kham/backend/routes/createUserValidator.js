import { body } from "express-validator";
export const createUserValidator = [
  body("email").isEmail().withMessage("Invalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("fullName")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),
  body("location")
    .isLength({ min: 5 })
    .withMessage("Location must be at least 2 characters long"),
];
