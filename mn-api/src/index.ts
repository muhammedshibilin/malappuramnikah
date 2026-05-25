import express from "express";
import user_route from "./interface/routes/user.route";
import otp_route from "./interface/routes/otp.route";
import cors from "cors";

import http from "http";

const app = express();
const server = new http.Server(app);

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Incoming Request Body:", req.body);
  next();
});

app.use("/user", user_route);
app.use("/otp", otp_route);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
