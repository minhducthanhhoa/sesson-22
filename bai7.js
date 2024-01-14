var a = parseFloat(prompt("Nhập vào hệ số a:"));
var b = parseFloat(prompt("Nhập vào hệ số b:"));
var c = parseFloat(prompt("Nhập vào hệ số c:"));

if (a === 0){
    if (b = 0){
        if (c === 0){
            console.log("Phương trình có vô số nghiệm");
        } else {
            console.log("Phương trình vô nghiệm");
        }
    } else {
        var x = -c / b;
        console.log("Phương trình có 1 nghiệm x = " + x);
    }
} else {
    var delta = b * b - 4 * a * c;

    if (delta > 0){
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có nghiệm x1 = " + x1);
        console.log("Phương trình có nghiệm x2 = " + x2);
    } else if (delta === 0){
        var x = -b / (2 * a);
        console.log("Phương trình có nghiệm kép x = " + x);
    } else {
        console.log("Phương trình vô nghiệm");
    }
}