import XLSX from "xlsx-js-style";

const exportExcel = () => {
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

  const ws_name = "SheetJS";

  const ws_data = [
    ["ถึง :", val1, "", "", "", "ชื่อลูกค้า :", val2],
    ["เบอร์โทร :", val3, "", "", "", "ประเภท :", val4],
    ["เบอร์แฟกซ์ :", val5, "", "", "", "วางบิล :", val6],
    ["Email :", val7],
    ["เซลล์ผู้ดูแล :", val8],

    [
      "ลำดับที่",
      "วันที่ติดตั้ง",
      "VID",
      "รุ่นรถ",
      "ทะเบียนรถ",
      "อุปกรณ์",
      "ยอดรวม",
      "ประเภท",
      "เลขตัวถัง",
    ],
    [
      `หมายเหตุ : ${val9} จำนวน ${val10} คัน คันละ ${val11} บาท เดือน ${val12}`,
      "",
      "",
      "",
      "",
      "ยอดก่อน Vat :",
      val13,
    ],
    ["", "", "", "", "", "Vat 7% :", val14],
    ["", "", "", "", "", "รวมทั้งสิ้น :", val15],
    ["", "", "", "", "", `หัก${val16} ณ ที่จ่าย ${val17} % :`, val18],
    ["", "", "", "", "", "ยอดที่ต้องชำระ :", val19],

    [
      "รบกวนโอนเงินเข้าบัญชี  บริษัท คราทอส แทรคกิ้ง จำกัด  ธนาคารกรุงเทพ  สาขาลุมพินี  เลขที่ 124-3-08771-3",
    ],
    [
      "และกรุณาส่งหลักฐานการชำระเงินมาที่ E-mail : kanitta@k-trak.com , wannapa@k-trak.com  ติดต่อ แนน, วรรณ ( 02-095-3670,02-095-3672 )",
    ],
    ["รวมถึงส่งภาษีหัก ณ ที่จ่าย ให้บริษัทฯ ทางไปรษณีย์"],
  ];

  const rows = document.getElementById("tblToExcl").rows;

  const col = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

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
    ws_data.splice(6, 0, [c1, c2, c3, c4, c5, c6, c7, c8, c9]);
  }

  const ws = XLSX.utils.aoa_to_sheet(ws_data);

  for (let r = 7; r < 6 + rows.length - 1; r++) {
    for (let i = 0; i < col.length; i++) {
      ws[`${col[i]}${r}`].s = {
        border: {
          top: {
            style: "thin",
            color: { rgb: "000000" },
          },
          right: {
            style: "thin",
            color: { rgb: "000000" },
          },
          left: {
            style: "thin",
            color: { rgb: "000000" },
          },
          bottom: {
            style: "thin",
            color: { rgb: "000000" },
          },
        },
      };
    }
  }

  for (let i = 0; i < col.length; i++) {
    ws[`${col[i]}6`].s = {
      // set the style for target cell
      border: {
        top: {
          style: "thin",
          color: { rgb: "000000" },
        },
        right: {
          style: "thin",
          color: { rgb: "000000" },
        },
        left: {
          style: "thin",
          color: { rgb: "000000" },
        },
        bottom: {
          style: "thin",
          color: { rgb: "000000" },
        },
      },
      fill: {
        fgColor: { rgb: "FFD9D9D9" },
      },
    };
  }

  for (let i = 1; i < 6; i++) {
    ws[`A${i}`].s = {
      font: {
        bold: true,
      },
    };
  }

  for (let i = 1; i < 4; i++) {
    ws[`F${i}`].s = {
      font: {
        bold: true,
      },
    };
  }

  ws[`A${rows.length - 1 + 6}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`F${rows.length - 1 + 6}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`F${rows.length - 1 + 8}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`F${rows.length - 1 + 10}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`G${rows.length - 1 + 6}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`G${rows.length - 1 + 8}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`G${rows.length - 1 + 9}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`G${rows.length - 1 + 10}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`A${rows.length - 1 + 11}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`A${rows.length - 1 + 12}`].s = {
    font: {
      bold: true,
    },
  };

  ws[`A${rows.length - 1 + 13}`].s = {
    font: {
      bold: true,
    },
  };

  /* Create workbook */
  const wb = XLSX.utils.book_new();

  /* Add the worksheet to the workbook */
  XLSX.utils.book_append_sheet(wb, ws, ws_name);

  /* Write to file */
  XLSX.writeFile(wb, "Billing Note.xlsx");
};

export default exportExcel;
