import express from "express";
import {
  sortImagesByKey
} from "../controllers/sort.js";
const router = express.Router();

router.post("/sortByKey/:sortBy", sortImagesByKey);

export default router;
