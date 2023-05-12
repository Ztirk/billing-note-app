import React, { useState } from "react";

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
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    let val3 = document.getElementById("val3").value;
    let val4 = document.getElementById("val4").value;
    let val5 = document.getElementById("val5").value;
    let val6 = document.getElementById("val6").value;
    let val7 = document.getElementById("val7").value;
    let val8 = document.getElementById("val8").value;
    let val9 = document.getElementById("val9").value;
    let val10 = document.getElementById("val10").value;
    let val11 = document.getElementById("val11").value;
    let val12 = document.getElementById("val12").value;
    let val13 = document.getElementById("val13").value;
    let val14 = document.getElementById("val14").value;
    let val15 = document.getElementById("val15").value;
    let val16 = document.getElementById("val16").value;
    let val17 = document.getElementById("val17").value;
    let val18 = document.getElementById("val18").value;
    let val19 = document.getElementById("val19").value;

    var ws_name = "SheetJS";

    var ws_data = [
      ["ถึง :", val1, "", "", "", "ชื่อลูกค้า :", val2],
      ["เบอร์โทร :", val3, "", "", "", "ประเภท :", val4],
      ["เบอร์แฟกซ์ :", val5, "", "", "", "วางบิล :", val6],
      ["Email :", val7],
      ["เซลล์ผู้ดูแล :", val8],

      [
        `หมายเหตุ : ${val9} จำนวน ${val10} คัน คันละ ${val11} บาท เดือน ${val12}`,
        "",
        "",
        "",
        "",
        "ยอดก่อน Vat:",
        val13,
      ],
      ["", "", "", "", "", "Vat 7%:", val14],
      ["", "", "", "", "", "รวมทั้งสิ้น:", val15],
      ["", "", "", "", "", `หัก: ${val16} ณ ที่จ่าย ${val17} %:`, val18],
      ["", "", "", "", "", "ยอดที่ต้องชำระ", val19],

      [
        "รบกวนโอนเงินเข้าบัญชี  บริษัท คราทอส แทรคกิ้ง จำกัด  ธนาคารกรุงเทพ  สาขาลุมพินี  เลขที่ 124-3-08771-3",
      ],
      [
        "และกรุณาส่งหลักฐานการชำระเงินมาที่ E-mail : kanitta@k-trak.com , wannapa@k-trak.com  ติดต่อ แนน, วรรณ ( 02-095-3670,02-095-3672 )",
      ],
      ["รวมถึงส่งภาษีหัก ณ ที่จ่าย ให้บริษัทฯ ทางไปรษณีย์"],
    ];

    const rows = document.getElementById("tblToExcl").rows;

    for (let r = rows.length - 2; r > 0; r--) {
      const c1 = rows[r].cells[0].innerHTML;
      const c2 = rows[r].cells[1].innerHTML;
      const c3 = rows[r].cells[2].innerHTML;
      const c4 = rows[r].cells[3].innerHTML;
      const c5 = rows[r].cells[4].innerHTML;
      const c6 = rows[r].cells[5].innerHTML;
      const c7 = rows[r].cells[6].innerHTML;
      const c8 = rows[r].cells[7].innerHTML;
      const c9 = rows[r].cells[8].innerHTML;
      ws_data.splice(5, 0, [c1, c2, c3, c4, c5, c6, c7, c8, c9]);
    }

    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    /* Create workbook */
    var wb = XLSX.utils.book_new();

    /* Add the worksheet to the workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);

    /* Write to file */
    XLSX.writeFile(wb, "Billing Note.xlsx");
  };

  return (
    <div className=" grid grid-cols-4 border border-black p-[10px] gap-[20px] relative bottom-0">
      <div>
        <label>รายการ :</label>
        <input className="border border-black" type="text" id="val9" />
      </div>
      <div>
        <label>จำนวน :</label>
        <input
          className="border border-black"
          type="text"
          id="val10"
          defaultValue={calculateData.keyAmount}
        />
        <label>คัน</label>
      </div>
      <div>
        <label>คันละ :</label>
        <input className="border border-black" type="text" id="val11" />
        <label>บาท</label>
      </div>
      <div>
        <label>เดือน :</label>
        <input className="border border-black" type="date" id="val12" />
      </div>
      <div className=" col-start-1 col-end-2">
        <label>ยอดรวม :</label>
        <input
          className="border border-black"
          type="text"
          id="val13"
          defaultValue={calculateData.keyTotal}
        />
        <label>บาท</label>
      </div>
      <div className=" col-start-2 col-end-3">
        <label>Vat 7% :</label>
        <input
          className="border border-black"
          type="text"
          id="val14"
          defaultValue={calculateData.keyVat}
        />
        <label>บาท</label>
      </div>
      <div className=" col-start-3 col-end-4">
        <label>รวมทั้งสิ้น :</label>
        <input
          className="border border-black"
          type="text"
          id="val15"
          defaultValue={calculateData.keyTotalVat}
        />
        <label>บาท</label>
      </div>
      <div className=" col-start-1 col-span-2">
        <label>หัก :</label>
        <input className="border border-black" type="text" id="val16" />
        <label>ณ ที่จ่าย</label>
        <input
          className="border border-black w-[50px]"
          type="number"
          id="val17"
        />
        <label>% :</label>
        <input
          className="border border-black"
          type="text"
          id="val18"
          defaultValue={calculateData.keyTotalPay}
        />
      </div>
      <div className=" col-span-2">
        <label>ยอดคงเหลือที่ต้องชำระ :</label>
        <input
          className="border border-black"
          type="text"
          id="val19"
          defaultValue={calculateData.keyLastTotal}
        />
        <label>บาท</label>
      </div>
      <button
        className="border border-black col-span-2 rounded hover:bg-black hover:text-white"
        onClick={handleCalcualte}
      >
        Calculate
      </button>
      <button
        className="border border-black col-span-2 rounded hover:bg-black hover:text-white"
        onClick={handleExport}
      >
        Export
      </button>
    </div>
  );
}

export default Calculation;
