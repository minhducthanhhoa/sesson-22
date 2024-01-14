//Trong JavaScript, các giá trị được xem là "truthy" hoặc "falsy" trong ngữ cảnh của các điều kiện logic. Khái niệm truthy và falsy đề cập đến cách JavaScript đánh giá các giá trị không phải là Boolean (true hoặc false) nhưng được sử dụng trong các biểu thức điều kiện.

//Các giá trị được coi là "falsy" khi chúng được đánh giá như là false trong một biểu thức điều kiện. Trên thực tế, trong JavaScript, các giá trị falsy bao gồm:

/*false: Giá trị Boolean false.
0: Giá trị số 0.
"": Chuỗi rỗng (không có ký tự nào).
null: Giá trị null.
undefined: Giá trị undefined.
NaN: Giá trị NaN (Not-a-Number).
Các giá trị còn lại được coi là "truthy" và sẽ được đánh giá như là true trong một biểu thức điều kiện.*/

// Ví dụ
function checkTruthyFalsy(value) {
    if (value) {
        console.log(value + " là giá trị truthy");
    } else {
        console.log(value + " là giá trị falsy");
    }
}

// Kiểm tra các giá trị
checkTruthyFalsy(false);      // false là giá trị falsy
checkTruthyFalsy(0);          // 0 là giá trị falsy
checkTruthyFalsy("");         // Chuỗi rỗng là giá trị falsy
checkTruthyFalsy(null);       // null là giá trị falsy
checkTruthyFalsy(undefined);  // undefined là giá trị falsy
checkTruthyFalsy(NaN);        // NaN là giá trị falsy

checkTruthyFalsy(true);       // true là giá trị truthy
checkTruthyFalsy(1);          // Số khác 0 là giá trị truthy
checkTruthyFalsy("Hello");    // Chuỗi không rỗng là giá trị truthy
checkTruthyFalsy({});         // Đối tượng rỗng là giá trị truthy
checkTruthyFalsy([]);         // Mảng rỗng là giá trị truthy
checkTruthyFalsy(function() {});  // Hàm là giá trị truthy