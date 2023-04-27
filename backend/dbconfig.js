const config = {
  user: "sa", // sql user
  password: "aab-gps-gtt", //sql user password
  server: "10.0.10.70", // if it does not work try- localhost
  database: "ZebraDB",
  options: {
    encrypt: false,
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "DB2", // SQL Server instance name
  },
  port: 1433,
};

module.exports = config;
