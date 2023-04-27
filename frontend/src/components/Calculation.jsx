import React from "react";

function Calculation() {
  function htmlTableToExcel(type) {
    var data = document.getElementById("tblToExcl");
    var excelFile = XLSX.utils.table_to_book(data, { sheet: "sheet1" });
    XLSX.write(excelFile, { bookType: type, bookSST: true, type: "base64" });
    XLSX.writeFile(excelFile, "Bill issue." + type);
  }

  return (
    <div className=" grid grid-cols-4 border border-black p-[10px] gap-[20px]">
      <div>
        <label>รายการ :</label>
        <input className="border border-black" type="text" name="" id="" />
      </div>
      <div>
        <label>จำนวน :</label>
        <input className="border border-black" type="text" name="" id="" />
        <label>คัน</label>
      </div>
      <div>
        <label>คันละ :</label>
        <input className="border border-black" type="text" name="" id="" />
        <label>บาท</label>
      </div>
      <div>
        <label>เดือน :</label>
        <input className="border border-black" type="date" name="" id="" />
      </div>
      <div className=" col-start-1 col-end-2">
        <label>ยอดรวม :</label>
        <input className="border border-black" type="text" name="" id="" />
      </div>
      <div className=" col-start-2 col-end-3">
        <label>Vat 7% :</label>
        <input className="border border-black" type="text" name="" id="" />
      </div>
      <div className=" col-start-3 col-end-4">
        <label>รวมทั้งสิ้น :</label>
        <input className="border border-black" type="text" name="" id="" />
      </div>
      <div className=" col-start-1 col-span-2">
        <label>หัก :</label>
        <input className="border border-black" type="text" name="" id="" />
        <label>ณ ที่จ่าย</label>
        <input className="border border-black w-[50px]" type="number" />
        <label>% :</label>
        <input className="border border-black" type="text" />
      </div>
      <div className=" col-span-2">
        <label>ยอดคงเหลือที่ต้องชำระ :</label>
        <input className="border border-black" type="text" name="" id="" />
      </div>
      <button className="border border-black col-span-2 rounded hover:bg-black hover:text-white">
        Calculate
      </button>
      <button
        className="border border-black col-span-2 rounded hover:bg-black hover:text-white"
        onClick={() => htmlTableToExcel("xlsx")}
      >
        Export
      </button>
    </div>
  );
}

export default Calculation;
