import React, { useState } from "react";
import Data from "./Data";

import api from "../utils/handleApi";

function Form(props) {
  const [tableStatus, setTableStatus] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();

    const input = document.getElementById("input").value;
    let fleet_id;
    for (let obj of props.data) {
      if (obj.fleet_desc === input) {
        fleet_id = { ...obj, fleet_id: obj.fleet_id };
        break;
      }
    }

    handleActive(input);

    api.getFleet(fleet_id, setTableData);
    api.getInfo(fleet_id, setFormData);
  };

  const handleActive = (input) => {
    if (input) {
      setTableStatus(true);
    } else if (!input) {
      setTableStatus(false);
    }
  };

  const handleReload = (e) => {
    e.preventDefault();
    location.reload();
  };

  return (
    <div className="m-[50px] bg-white border border-black rounded">
      <form className=" p-[10px] flex flex-col m-auto gap-[20px]" id="form">
        <div className="flex justify-center gap-[20px] items-center">
          <label className=" font-bold">Fleet name: </label>
          <input
            className="border-black border w-max rounded"
            type="search"
            list="datalist"
            id="input"
          />
          <datalist id="datalist">
            {props.data.map((d) => (
              <option key={d.fleet_id || ""} value={d.fleet_desc || ""} />
            ))}
          </datalist>
          <button
            className=" px-[5px] border border-black rounded hover:bg-black hover:text-white bg-green-500 text-white font-bold"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </button>
          <button
            className=" px-[5px] border border-black rounded hover:bg-black hover:text-white bg-red-500 text-white font-bold"
            onClick={handleReload}
          >
            <i className="fa-solid fa-arrows-rotate"></i> Refresh
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-[50px] gap-y-[20px]">
          <div className="grid grid-cols-2">
            <label className=" font-bold">ถึง :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.Customer : ""}
              id="val1"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">ชื่อลูกค้า :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.To_name : ""}
              id="val2"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">เบอร์โทร :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.Tel : ""}
              id="val3"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">ประเภท :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.BillType : ""}
              id="val4"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">เบอร์แฟกซ์ :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.Fax : ""}
              id="val5"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">วางบิลประจำเดือน :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue=""
              id="val6"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">Email :</label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.Email : ""}
              id="val7"
            />
          </div>
          <div></div>
          <div className="grid grid-cols-2">
            <label className=" font-bold">เซลส์ผู้ดูแล : </label>
            <input
              className="border border-gray-400 rounded"
              defaultValue={formData !== undefined ? formData.Sales : ""}
              id="val8"
            />
          </div>
        </div>
      </form>
      <Data data={tableData} active={tableStatus} />
    </div>
  );
}

export default Form;
