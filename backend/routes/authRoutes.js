// import express from "express";
// import { login } from "../controller/authController.js";
// const router = express.Router();
// router.post("/login", login);
// export default router;

import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Auth route working");
});
export default router;  