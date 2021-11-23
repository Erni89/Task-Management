const router = require("express").Router();
const {addNewTask,compliedTask,getAllTask} = require("../controllers/task.controllers");

router.get("/", getAllTask);
router.post("/", addNewTask);
router.put("/", compliedTask);

module.exports = router;
