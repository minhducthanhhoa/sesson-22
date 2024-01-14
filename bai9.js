let month = parseInt(prompt("Nhập tháng (1-12): "));
let year = parseInt(prompt("Nhập năm: "));

if (isNaN(month) || isNaN(year)) {
  console.log("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập số.");
} else if (month < 1 || month > 12) {
  console.log("Tháng không hợp lệ. Vui lòng nhập tháng từ 1 đến 12.");
} else {
  let daysInMonth;

  if (month === 2) {
    // Kiểm tra năm nhuận
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30;
  } else {
    daysInMonth = 31;
  }

  console.log(`Số ngày trong tháng ${month} năm ${year} là ${daysInMonth} ngày.`);
}