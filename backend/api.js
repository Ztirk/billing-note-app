const express = require("express");
const sql = require("mssql");
const cors = require('cors')

const config = require("./dbconfig");

const app = express();
const router = express.Router();

app.use(cors())
app.use("/api", router);

router.get("/data", async (req, res, next) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM fleet f WHERE f.status NOT LIKE 'N'");
    
    res.json(result.recordset)
  } catch (err) {
    res.json(err);
  }
});

app.listen(3000);
