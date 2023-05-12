const config = {
  user: "kt-devo", // sql user
  password: "1q2w&dev", //sql user password
  server: "10.2.10.220", // if it does not work try- localhost
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
