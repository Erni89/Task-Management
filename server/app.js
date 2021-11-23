const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')
const { connectToDB } = require("./config/connectToDB.config");

dotenv.config({ path: "./config/config.env" });
app.use(cors())
app.use(express.json());
connectToDB();

const port = process.env.PORT || 3002;
const server = app.listen(port, () =>
  console.log(`server running on port: ${port}`)
);

app.use("/customer", require("./routers/customer.routers"));
app.use("/task", require("./routers/task.routers"));
app.use((req, res) => {
  res.status(400).json({ err: true, msg: "Page Not Found!!!" });
});

// Handle unhandled promies rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
