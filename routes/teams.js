import { Router } from "express";
import * as controllers from "../controllers/teams.js";

const router = Router()

// router.get("/", (request, response) => {
//     response.send("here's the teams")
// })

router.get("/", controllers.getTeams);
router.get("/:id", controllers.getTeam);
router.post("/", controllers.createTeam);
router.put("/:id", controllers.updateTeam);
router.delete("/:id", controllers.deleteTeam);

export default router;