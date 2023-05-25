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

const updateInfo = async (e) => {
  try {
    const rows = document.getElementById("tblToExcl").rows.length - 1;
    for (let r = 1; r < rows; r++) {
      const vid = await document.getElementById("tblToExcl").rows[r].cells[2]
        .innerHTML;
      const device = await document.getElementById("tblToExcl").rows[r].cells[5]
        .innerHTML;
      const price = await document.getElementById("tblToExcl").rows[r].cells[6]
        .innerHTML;
      const detail = await document.getElementById("tblToExcl").rows[r].cells[7]
        .innerHTML;
      const updateInfo = await axios.put(
        `http://localhost:3000/api/info/${vid}/${device}/${price}/${detail}`
      );
      updateInfo;
    }
    e.target.style.cssText = `background-color: gray`;
    e.target.setAttribute("disabled", "");
    setTimeout(() => {
      e.target.removeAttribute("disabled");
      e.target.style.cssText = `--tw-bg-opacity: 1;
      background-color: rgb(34 197 94 / var(--tw-bg-opacity));`;
      alert("Update Completed");
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};

export default {
  fetchData,
  getFleet,
  getInfo,
  updateInfo,
};
