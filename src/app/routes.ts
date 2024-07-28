import express from "express";
import userRouter from "./modules/user/user.routes";
import upload from "../helper/uploads";
import uploadToBunny from "./middleware/uploadToBunny";
import { auth } from "./middleware/auth";
import transactionRouter from "./modules/transactions/transactions.routes";
import todoRouter from "./modules/todo/todo.routes";

const router = express.Router();

const moduleRoute = [
  { path: "/users", routes: userRouter },
  { path: "/transactions", routes: transactionRouter, auth: true },
  { path: "/todo", routes: todoRouter, auth: true },
];

moduleRoute.forEach((route) =>
  route?.auth ? router.use(route.path, auth(), route.routes) : router.use(route.path, route.routes)
);

// upload
// router.post("/upload", auth(), upload.single("photos"), uploadToBunny);

export default router;
