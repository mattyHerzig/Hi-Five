console.log("start.js");

import express from "express";
import cookieParser from "cookie-parser";
import { loginRoute, redirectRoute, spotifyIDRoute, refreshAccessToken, global_user_id } from "./authentication.js"


const PORT = 3000;
// import { Router } from "express";
const app = express();
app.use(cookieParser());

app.get("/", (req, res) => { res.send("Hi-Five Backend") });

loginRoute(app);
redirectRoute(app);
spotifyIDRoute(app);

app.listen(PORT, () => {
  console.log("app.listen");
  console.log(`App listening on port ${PORT}`);
});

export { PORT }