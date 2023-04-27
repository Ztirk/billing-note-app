import React from "react";
import Calculation from "./Calculation";

function Data(props) {
  return (
    <>
      <div className=" w-full h-[400px] overflow-auto">
        <table className=" w-full border border-black" id="tblToExcl">
          <tr>
            <th className="border border-black">ลำดับที่</th>
            <th className="border border-black">วันที่ติดตั้ง</th>
            <th className="border border-black">VID</th>
            <th className="border border-black">รุ่นรถ</th>
            <th className="border border-black">ทะเบียนรถ</th>
            <th className="border border-black">อุปกรณ์</th>
            <th className="border border-black">ยอดรวม</th>
            <th className="border border-black">ประเภท</th>
            <th className="border border-black">เลขตัวถัง</th>
          </tr>
          {props.data.map((d) => (
            <tr>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
              <td className="border border-black">{d.fleet_desc || ""}</td>
            </tr>
          ))}
        </table>
      </div>
      <Calculation />
    </>
  );
}

export default Data;
