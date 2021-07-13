import express from "express";
const helmet = require("helmet");
const cors = require("cors");
const Ddos = require("ddos");

import countries from "./routes/countries";
import game from './routes/game'
import auth from "./routes/auth";
import config from "./config/index";
import dbConnect from "./lib/mongoose";

const ddos = new Ddos({ burst: 5, limit: 10 });

const app = express();
app.use(ddos.express);
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
    method: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//DataBase Connection
dbConnect(config.DATABASE_URL);


//Routes
countries(app);
game(app);
auth(app);

app.listen(config.PORT, () => {
  console.log(`server running on port ${config.PORT}`);
});
