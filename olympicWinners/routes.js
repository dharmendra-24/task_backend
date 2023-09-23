import { Router } from "express";
import { getOlympicWinners } from "./controller.js";
const router = Router();

router.route("/").get(getOlympicWinners);
export default router;
