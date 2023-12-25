import express from "express";
import { mongoDB } from "./db.js";
import createUser from "./routes/createUser.js";
import loginUser from "./routes/loginUser.js";
const app = express();

app.use(express.json());
const PORT = 8000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Expose-Headers", "accessToken, refreshToken,");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET, OPTIONS"
    );
    return res.status(200).json({});
  }

  return next();
});

mongoDB();

app.use(createUser);
app.use(loginUser);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
