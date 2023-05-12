import React, { useState } from "react";
import Data from "./Data";

import api from "../util/handleApi";

function Form(props) {
  const [fleetChoosenData, setFleetChoosenData] = useState({});
  const [tableStatus, setTableStatus] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();

    const input = document.getElementById("input").value;
    let fleet_id;
    for (let obj of props.data) {
      if (obj.fleet_desc === input) {
        setFleetChoosenData({ ...obj, fleet_id: obj.fleet_id });
        fleet_id = { ...obj, fleet_id: obj.fleet_id };
        break;
      } else {
        setFleetChoosenData({});
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
    <div className="m-[50px] ">
      <form
        className=" p-[10px] flex flex-col border border-black m-auto gap-[20px]"
        id="form"
      >
        <div className="flex justify-center gap-[20px] items-center">
          <label>Fleet name: </label>
          <label>{fleetChoosenData.fleet_id || "fleet id"}</label>
          <input
            className="border-black border w-max"
            type="search"
            list="datalist"
            id="input"
          />
          <datalist id="datalist">
            {props.data.map((d) => (
              <option key={d.fleet_id || ""} value={d.fleet_desc || ""} />
            ))}
          </datalist>
          {/* <div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Head fleet only</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Sub fleet only</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Head and Subfleet</label>
            </div>
          </div> */}
          <button
            className="border border-black rounded hover:bg-black hover:text-white"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="border border-black rounded hover:bg-black hover:text-white"
            onClick={handleReload}
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-[50px] gap-y-[20px]">
          <div className="grid grid-cols-2">
            <label>ถึง :</label>
            <input
              className="border border-black"
              defaultValue={formData.Customer || ""}
              id="val1"
            />
          </div>
          <div className="grid grid-cols-2">
            <label>ชื่อลูกค้า :</label>
            <input
              className="border border-black"
              defaultValue={formData.To_name || ""}
              id="val2"
            />
          </div>
          <div className="grid grid-cols-2">
            <label>เบอร์โทร :</label>
            <input
              className="border border-black"
              defaultValue={formData.Tel || ""}
              id="val3"
            />
          </div>
          <div className="grid grid-cols-2">
            <label>ประเภท :</label>
            <input
              className="border border-black"
              defaultValue={formData.BillType || ""}
              id="val4"
            />
          </div>
          <div className="grid grid-cols-2">
            <label>เบอร์แฟกซ์ :</label>
            <input
              className="border border-black"
              defaultValue={formData.Fax || ""}
              id="val5"
            />
          </div>
          <div className="grid grid-cols-2">
            <label>วางบิลประจำเดือน :</label>
            <input className="border border-black" defaultValue="" id="val6" />
          </div>
          <div className="grid grid-cols-2">
            <label>Email :</label>
            <input
              className="border border-black"
              defaultValue={formData.Email || ""}
              id="val7"
            />
          </div>
          <div></div>
          <div className="grid grid-cols-2">
            <label>เซลส์ผู้ดูแล :</label>
            <input
              className="border border-black"
              defaultValue={formData.Sales || ""}
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
