let number = parseFloat(prompt("Nhập vào một số:"));

if (Math.sqrt(number) % 1 === 0){
    console.log("Số đó là số chính phương.");
} else {
    console.log("Số đó không phải là số chính phương.");
}