let number1 = parseFloat(prompt("Nhập số thứ nhất: "));
let number2 = parseFloat(prompt("Nhập số thứ hai: "));
let operator = prompt("Nhập phép tính (+, -, *, /): ");

let result;

if (isNaN(number1) || isNaN(number2)) {
  console.log("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập số.");
} else {
  switch (operator) {
    case "+":
      result = number1 + number2;
      console.log("Kết quả: " + result);
      break;
    case "-":
      result = number1 - number2;
      console.log("Kết quả: "+ result);
      break;
    case "*":
      result = number1 * number2;
      console.log("Kết quả: " + result);
      break;
    case "/":
      if (number2 === 0) {
        console.log("Không thể chia cho 0.");
      } else {
        result = number1 / number2;
        console.log("Kết quả: " + result);
      }
      break;
    default:
      console.log("Phép tính không hợp lệ.");
  }
}