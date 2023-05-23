import express from "express";
import {
  getPaginationData
} from "../controllers/pagination.js";
const router = express.Router();

//This route implements pagination, it is supposeed to get in the req body: 
//data- From pixabay api by the selected category,
//limit- The number of photoes to show on the screen
//total- The total number of the photos from the selected category
//page- The current page 
//action- The selected action: prev or next 
router.post("/paginationData", getPaginationData);

export default router;
