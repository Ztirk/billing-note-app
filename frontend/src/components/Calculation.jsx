import React, { useState } from "react";
import axios from "axios";

import api from "../utils/handleApi";
import exportExcel from "../utils/handleExport";

function Calculation(props) {
  const [calculateData, setCalculateData] = useState({});

  const handleCalcualte = () => {
    const noRows = document.getElementById("tblToExcl").rows.length;
    const amount = noRows - 2;

    let sum = 0;

    for (let r = 1; r < noRows - 1; r++) {
      const tb = document.getElementById("tblToExcl");
      sum += Number(tb.rows[r].cells[6].innerHTML);
    }

    const total = sum.toFixed(2);
    const vat = (total * 0.07).toFixed(2);
    const totalVat = (Number(total) + Number(vat)).toFixed(2);

    const pay = document.getElementById("val17").value / 100;
    const totalPay = (total * pay).toFixed(2);
    const lastTotal = (totalVat - totalPay).toFixed(2);

    setCalculateData({
      keyAmount: amount,
      keyTotal: total,
      keyVat: vat,
      keyTotalVat: totalVat,
      keyTotalPay: totalPay,
      keyLastTotal: lastTotal,
    });
  };

  const handleExport = () => {
    exportExcel();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    api.updateInfo(e);
  };

  return (
    <div className=" grid grid-cols-4 p-[10px] gap-[20px] relative bottom-0">
      <div>
        <label className=" font-bold">รายการ : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val9"
        />
      </div>
      <div>
        <label className=" font-bold">จำนวน : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val10"
          defaultValue={calculateData.keyAmount}
        />
        <label className=" font-bold"> คัน</label>
      </div>
      <div>
        <label className=" font-bold">คันละ : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val11"
        />
        <label className=" font-bold"> บาท</label>
      </div>
      <div>
        <label className=" font-bold">เดือน : </label>
        <input
          className="border border-gray-400 rounded"
          type="date"
          id="val12"
        />
      </div>
      <div className=" col-start-1 col-end-2">
        <label className=" font-bold">ยอดรวม : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val13"
          defaultValue={calculateData.keyTotal}
        />
        <label className=" font-bold"> บาท</label>
      </div>
      <div className=" col-start-2 col-end-3">
        <label className=" font-bold">Vat 7% : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val14"
          defaultValue={calculateData.keyVat}
        />
        <label className=" font-bold"> บาท</label>
      </div>
      <div className=" col-start-3 col-end-4">
        <label className=" font-bold">รวมทั้งสิ้น : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val15"
          defaultValue={calculateData.keyTotalVat}
        />
        <label className=" font-bold"> บาท</label>
      </div>
      <div className=" col-start-1 col-span-2">
        <label className=" font-bold">หัก : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val16"
        />
        <label className=" font-bold"> ณ ที่จ่าย </label>
        <input
          className="border border-gray-400 rounded w-[50px]"
          type="number"
          id="val17"
        />
        <label className=" font-bold"> % : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val18"
          defaultValue={calculateData.keyTotalPay}
        />
      </div>
      <div className=" col-span-2">
        <label className=" font-bold">ยอดคงเหลือที่ต้องชำระ : </label>
        <input
          className="border border-gray-400 rounded"
          type="text"
          id="val19"
          defaultValue={calculateData.keyLastTotal}
        />
        <label className=" font-bold"> บาท</label>
      </div>
      <button
        className="border border-black col-span-1 rounded hover:bg-black hover:text-white font-bold bg-green-500 text-white"
        onClick={handleCalcualte}
      >
        <i className="fa-solid fa-calculator"></i> Calculate
      </button>
      <button
        className="border border-black col-span-1 rounded hover:bg-black hover:text-white font-bold bg-green-500 text-white"
        onClick={handleUpdate}
      >
        <i className="fa-regular fa-pen-to-square"></i> Update
      </button>
      <button
        className="border border-black col-span-2 rounded hover:bg-black hover:text-white font-bold bg-green-500 text-white"
        onClick={handleExport}
      >
        <i className="fa-solid fa-file-excel"></i> Export
      </button>
    </div>
  );
}

export default Calculation;
