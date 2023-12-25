import { User } from "../modals/user.js";
import { validationResult } from "express-validator";
export const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    await User.create({
      fullName: req.body.fullName,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    }).then(res.json({ success: true }));
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
