let number = prompt("Nhập một số có 4 chữ số: ");

if (number.length !== 4) {
  console.log("Bạn đã nhập sai. Vui lòng nhập một số có 4 chữ số.");
} else {
  let thousands = parseInt(number[0]);
  let hundreds = parseInt(number[1]);
  let tens = parseInt(number[2]);
  let units = parseInt(number[3]);

  console.log("Chữ số hàng nghìn: " + thousands);
  console.log("Chữ số hàng trăm: " + hundreds);
  console.log("Chữ số hàng chục: " + tens);
  console.log("Chữ số hàng đơn vị: " + units);
}