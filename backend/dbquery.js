const sql = require("mssql");

const config = require("./dbconfig");

const getData = async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query(
        "SELECT fleet_id, fleet_desc FROM ZebraDB..fleet f WHERE f.status NOT LIKE 'N'"
      );
    res.json(result.recordset);
  } catch (err) {
    res.json("ERROR 1" + err);
  }
};

const getDataByFleetId = async (req, res) => {
  try {
    const id = await req.params.id;
    const pool = await sql.connect(config);
    const result = await pool.request().input("id", sql.Int, id)
      .query(`SELECT ROW_NUMBER() OVER(ORDER BY a.install_date ASC) AS ลำดับที่
              ,CONVERT(varchar,(select top 1 install_date from ZebraDB..vehicle where registration like '%'+ a.registration +'%' order by install_date),103) as วันที่ติดตั้ง
              ,a.veh_id AS VID
              ,b.model_name AS รุ่นรถ
              ,a.registration AS ทะเบียนรถ
              , ISNULL((SELECT Device FROM ZebraDB_Report..RPVehicleInFleet_PriceDetail WHERE Veh_id = a.veh_id),'-') AS อุปกรณ์
              , case when (SELECT Price FROM ZebraDB_Report..RPVehicleInFleet_PriceDetail WHERE Veh_id = a.veh_id) is null then  0.00 else  (SELECT Price FROM ZebraDB_Report..RPVehicleInFleet_PriceDetail WHERE Veh_id = a.veh_id) END AS ยอดรวม
              --, ISNULL((SELECT Price FROM ZebraDB_Report..RPVehicleInFleet_PriceDetail WHERE Veh_id = a.veh_id),'-') AS ยอดรวม
              , ISNULL((SELECT Detail_Type FROM ZebraDB_Report..RPVehicleInFleet_PriceDetail WHERE Veh_id = a.veh_id),'-') AS ประเภท
              ,a.frame_no เลขตัวถัง
                FROM ZebraDB..vehicle a
                LEFT JOIN ZebraDB..model b ON a.model = b.model_id
                LEFT JOIN ZebraDB..fleet_vehicle c ON a.veh_id = c.veh_id
                LEFT JOIN ZebraDB..fleet d ON c.fleet_id = d.fleet_id
                WHERE d.fleet_id = @id
                ORDER BY a.install_date`);
    res.json(result.recordset);
  } catch (err) {
    res.json("ERROR 2" + err);
  }
};

const getInfoById = async (req, res) => {
  try {
    const id = await req.params.id;
    const pool = await sql.connect(config);
    const result = await pool.request().input("id", sql.Int, id)
      .query(`SELECT Customer, To_name, Tel, Fax, Email, BillType, Sales 
            FROM ZebraDB_Report..RPVehicleInFleet_CustomerDetail RPVC
            WHERE RPVC.Fleet_id = @id`);
    res.json(result.recordset);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getData: getData,
  getDataByFleetId: getDataByFleetId,
  getInfoById: getInfoById,
};
