var a = parseFloat(prompt("Nhập vào số a:"));
var b = parseFloat(prompt("Nhập vào số b:"));

if (a % b === 0){
    console.log("a chia hết cho b");
} else if (b % a === 0){
    console.log("b chia hết cho a");
} else {
    console.log("Cả a và b không chia hết cho nhau.");
}