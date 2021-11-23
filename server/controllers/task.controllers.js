const taskModel = require("../models/task.models");

exports.getAllTask = async (req, res, next) => {
  try {
    const answer = await taskModel.find().populate("customer");
    res.status(200).json({ err: false, answer, msg: "All Task" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: true, error });
  }
};

exports.addNewTask = async (req, res, next) => {
  try {
    const createTask = new taskModel(req.body);
    await createTask.save();
    res.status(200).json({ err: false, msg: "New task Created" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: true, msg: error });
  }
};

exports.compliedTask = async (req, res, next) => {
  try {
    let msg = "Task completed";
    const foundTask = await taskModel.findByIdAndUpdate(
      { _id: req.body.id },
      {
        $set: { completed: req.body.completed },
      }
    );
    if (!req.body.completed) msg = "Task not completed ";

    res.status(200).json({ err: false, msg });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: true, msg: error });
  }
};
