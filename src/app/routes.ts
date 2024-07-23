import express from "express";
import userRouter from "./modules/user/user.routes";
import upload from "../helper/uploads";
import uploadToBunny from "./middleware/uploadToBunny";
import { auth } from "./middleware/auth";
import transactionRouter from "./modules/transactions/transactions.routes";

const router = express.Router();

const moduleRoute = [
  { path: "/users", routes: userRouter },
  { path: "/transactions", routes: transactionRouter },
];

moduleRoute.forEach((route) => router.use(route.path, route.routes));

// upload
// router.post("/upload", auth(), upload.single("photos"), uploadToBunny);

export default router;
