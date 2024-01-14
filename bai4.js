var year = prompt("Nhập vào năm mà bạn muốn:");

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
    console.log("Đây là năm nhuận");
} else {
    console.log( "Đây không phải là năm nhuận");
}