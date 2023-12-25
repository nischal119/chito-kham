import { validationResult } from "express-validator";
import { User } from "../modals/user.js";
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let email = req.body.email;
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    if (req.body.password !== userData.password) {
      return res.status(200).json({ errors: "Invalid Credentials" });
    }

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
