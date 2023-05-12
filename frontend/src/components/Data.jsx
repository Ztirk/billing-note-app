import React from "react";
import Calculation from "./Calculation";

function Data(props) {
  const handleDelete = (e) => {
   e.currentTarget.parentElement.parentElement.remove();
  };

  const handleAdd = () => {
    const tbodyNode = document.getElementById("tbody");
    const delBtn = document.getElementsByName("delete-btn")[0].cloneNode(true);
    delBtn.addEventListener("click", handleDelete)

    for (let r = 0; r < 1; r++) {
      const trNode = document.createElement("tr");

      for (let c = 0; c < 10; c++) {
        const tdTextNode = document.createTextNode("hello");
        const tdNode = document.createElement("td");
        trNode.appendChild(tdNode);
        if (c == 9) {
          tdNode.appendChild(delBtn);
          tdNode.style.cssText = `
          border: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
        `
        } else if (c < 9) {
          tdNode.setAttribute("contentEditable", "true");
          tdNode.style.cssText = `
          border: 1px solid black
        `
        }
      }

      tbodyNode.appendChild(trNode);
      trNode.style.cssText = `
        display: grid;
        grid-template-columns: repeat(9, 1fr) 50px;
        width: 100%;
        word-break: break-all;
      `;
    }
  };

  return (
    <>
      <div className="w-full h-[400px] overflow-y-scroll border border-black">
        <table className={props.active ? " w-full" : " hidden"} id="tblToExcl">
          <thead>
            <tr className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_50px]">
              <th className="border border-black break-all">
                ลำดับที่
              </th>
              <th className="border border-black break-all">
                วันที่ติดตั้ง
              </th>
              <th className="border border-black break-all">
                VID
              </th>
              <th className="border border-black break-all">
                รุ่นรถ
              </th>
              <th className="border border-black break-all">
                ทะเบียนรถ
              </th>
              <th className="border border-black break-all">
                อุปกรณ์
              </th>
              <th className="border border-black break-all" id="ยอดรวม">
                ยอดรวม
              </th>
              <th className="border border-black break-all">
                ประเภท
              </th>
              <th className="border border-black break-all">
                เลขตัวถัง
              </th>
              <th className="border border-black break-all"></th>
            </tr>
          </thead>
          <tbody id="tbody">
            {props.data.map((d, i) => (
              <tr
                className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_50px]"
                key={i}
              >
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.ลำดับที่}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.วันที่ติดตั้ง}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.VID}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.รุ่นรถ}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.ทะเบียนรถ}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.อุปกรณ์}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.ยอดรวม}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.ประเภท}
                </td>
                <td
                  className="border border-black break-all"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {d.เลขตัวถัง}
                </td>
                <td className="border border-black justify-center items-center flex">
                  <i
                    className="fa-regular fa-circle-xmark cursor-pointer"
                    onClick={handleDelete}
                    name="delete-btn"
                  ></i>
                </td>
              </tr>
            )) || <></>}
          </tbody>
          <tfoot>
            <tr className=" col-span-10 border border-black flex justify-center">
              <td>
                <i
                  className="fa-solid fa-circle-plus cursor-pointer"
                  onClick={handleAdd}
                ></i>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Calculation />
    </>
  );
}

export default Data;
