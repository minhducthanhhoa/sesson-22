let a = parseFloat(prompt("Nhập vào hệ số a:"));
let b = parseFloat(prompt("Nhập vào hệ số b:"));

if (a === 0){
    if (b === 0){
        console.log("Phương trình có vô số nghiệm.");
    } else {
        console.log("Phương trình vô nghiệm.");
    }
} else {
    let x = -b / a;
    console.log("Phương trình có nghiệm x = " + x);
}