import express from "express";
import {
  getPaginationData
} from "../controllers/pagination.js";
const router = express.Router();

router.post("/paginationData", getPaginationData);

export default router;
