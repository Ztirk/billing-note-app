const express = require("express");
const cors = require("cors");

const query = require("./dbquery");

const app = express();
const router = express.Router();

app.use(cors());
app.use("/api", router);

router.get("/info/:id", query.getInfoById)

router.get("/data/:id", query.getDataByFleetId);

router.get("/data", query.getData);

app.listen(3000);
