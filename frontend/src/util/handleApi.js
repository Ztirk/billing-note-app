import axios from "axios";

const fetchData = async (setData) => {
  try {
    const res = await axios.get("http://localhost:3000/api/data");
    setData([...res.data]);
  } catch (err) {
    console.log(err);
  }
};

const getFleet = async (fleet_id, setTableData) => {
  try {
    const domainNPath = "http://localhost:3000/api/data";
    const response = await axios.get(`${domainNPath}/${fleet_id.fleet_id}`);
    setTableData([...response.data]);
  } catch (err) {
    console.log(err);
  }
};

const getInfo = async (fleet_id, setFormData) => {
  try {
    const domainNPath = "http://localhost:3000/api/info";
    const response = await axios.get(`${domainNPath}/${fleet_id.fleet_id}`);
    setFormData(...response.data);
  } catch (err) {
    console.log(err);
  }
};

export default {
  fetchData: fetchData,
  getFleet: getFleet,
  getInfo: getInfo,
};
