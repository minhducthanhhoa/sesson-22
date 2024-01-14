var a = parseFloat(prompt("Nhập độ dài cạnh thứ nhất:"));
var b = parseFloat(prompt("Nhập độ dài cạnh thứ hai:"));
var c = parseFloat(prompt("Nhập độ dài cạnh thứ ba:"));

if (a + b > c){
    console.log("Độ dài nhập vào hợp lệ.");
} else {
    console.log("Độ dài nhập vào không hợp lệ.");
}
