import express from "express";
import {
  sortDataByKey
} from "../controllers/sort.js";
const router = express.Router();

//This rout implements sort by key, it supposed to get  in the req body:
//data- From pixabay api
//sortBy- The key to sort the data by it
router.post("/sortByKey/:sortBy", sortDataByKey);

export default router;
