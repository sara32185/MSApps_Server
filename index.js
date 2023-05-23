import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import paginationRoutes from "./routes/pagination.js";
import sortRoutes from './routes/sort.js'

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/pagination", paginationRoutes);
app.use("/sort", sortRoutes);

//Server will run in 3006 port
const port = 3006;
const url = "http://localhost:" + port;

app.listen(port, () => {
  console.log("Service endpoint= %s", url);
});
