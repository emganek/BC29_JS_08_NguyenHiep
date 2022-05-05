var arrNum = [];
document.getElementById("btnAddEle").onclick = function () {
    var numAdded = document.getElementById("numAdded").value;
    if (numAdded != "") {
        var numAdded = Number(document.getElementById("numAdded").value);
        var arrNumContent = "";
        arrNum.push(numAdded);
        for (let i = 0; i < arrNum.length; i++) {
            arrNumContent += `${arrNum[i]} `;
        }
        document.getElementById("arrNumContent").innerHTML = arrNumContent;
    }
}

// BÀI TẬP 01----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Duyệt qua mảng, nếu phần tử nào chia hết cho 2 thì cộng dồn lại 10000 thì dừng
// - Đầu ra:
//     + Kết quả tổng

document.getElementById("exBtn01").onclick = function(){
    var ex01_sum = 0;
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i] > 0){
            ex01_sum += arrNum[i];
        }
    }
    document.getElementById("ex01_result").innerHTML = `Tổng các số dương trong mảng bằng ${ex01_sum}`;
}

// BÀI TẬP 02----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Duyệt qua mảng, nếu phần tử nào chia hết cho 2 thì tăng biến đếm
// - Đầu ra:
//     + Kết quả biến đếm

document.getElementById("exBtn02").onclick = function(){
    var ex02_count = 0;
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i] > 0){
            ex02_count++;
        }
    }
    document.getElementById("ex02_result").innerHTML = `Có ${ex02_count} số dương trong mảng`;
}

// BÀI TẬP 03----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Duyệt qua mảng và tìm số nhỏ nhất
// - Đầu ra:
//     + Kết quả số nhỏ nhất

document.getElementById("exBtn03").onclick = function(){
    var ex03_min = arrNum[0];
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i] < ex03_min){
            ex03_min = arrNum[i];
        }
    }
    document.getElementById("ex03_result").innerHTML = `${ex03_min} là số nhỏ nhất trong mảng`;
}

// BÀI TẬP 04----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Duyệt qua mảng và tìm số dương nhỏ nhất
// - Đầu ra:
//     + Kết quả số dương nhỏ nhất

document.getElementById("exBtn04").onclick = function(){
    var ex04_posMin;
    var ex04_posCnt = 0;
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i]>0 && ex04_posCnt === 0){
            ex04_posCnt = 1;
            ex04_posMin = arrNum[i];
        }
        if (arrNum[i] > 0 && arrNum[i] < ex04_posMin && ex04_posCnt != 0){
            ex04_posMin = arrNum[i];
        }
    }
    document.getElementById("ex04_result").innerHTML = `${ex04_posMin} là số dương nhỏ nhất trong mảng`;
}

// BÀI TẬP 05----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Duyệt qua mảng và tìm số chẵn cuối cùng
// - Đầu ra:
//     + Kết quả số chẵn cuối cùng

document.getElementById("exBtn05").onclick = function(){
    var ex05_even = -1;
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i] % 2 === 0){
            ex05_even = arrNum[i];
        }
    }
    document.getElementById("ex05_result").innerHTML = ex05_even;
}


// BÀI TẬP 06----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Đổi chỗ 2 phần tử trong mãng
// - Đầu ra:
//     + In ra mảng mới;

document.getElementById("exBtn06").onclick = function(){
    var ex06_content = "";
    var ex06_arrNum = arrNum ;
    var ex06_pos1 = Number(document.getElementById("ex06_pos1").value);
    var ex06_pos2 = Number(document.getElementById("ex06_pos2").value);

    if (ex06_pos1 >= 0 && ex06_pos2 >= 0){
        var ex06_temp = ex06_arrNum[ex06_pos1];
        ex06_arrNum[ex06_pos1] = ex06_arrNum[ex06_pos2];
        ex06_arrNum[ex06_pos2] = ex06_temp;
    
        for (let i = 0; i < ex06_arrNum.length; i++){
            ex06_content += `${ex06_arrNum[i]} `;
        }
        document.getElementById("ex06_result").innerHTML = `Mảng mới: ${ex06_content}`;
    }
    else{
        document.getElementById("ex06_result").innerHTML = "Bạn nhập sai rồi!";
    }
}

// BÀI TẬP 07----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Sắp xếp theo thứ tự tăng dân
// - Đầu ra:
//     + In ra mảng mới

document.getElementById("exBtn07").onclick = function(){
    var ex07_content = "";
    var ex07_arrNum = arrNum ;

    for( let i = 0 ; i < ex07_arrNum.length -1; i++){
        for (let j = i+1; j < ex07_arrNum.length; j++){
            if (ex07_arrNum[j] < ex07_arrNum[i]){
                let ex07_temp = ex07_arrNum[i];
                ex07_arrNum[i] = ex07_arrNum[j];
                ex07_arrNum[j] = ex07_temp;
            }
        }
    }

    for (let i = 0; i < ex07_arrNum.length; i++){
        ex07_content += `${ex07_arrNum[i]} `;
    }
    document.getElementById("ex07_result").innerHTML = `Mảng mới: ${ex07_content}`;
}

// BÀI TẬP 08----------------------------
// - Đầu vào:
//     + 1 mảng
// - Xử lý:
//     + Duyệt qua mảng tìm số nguyên tố dầu tiên xong break
// - Đầu ra:
//     + In ra số nguyên tố

function isNguyenTo(numInput){
    var count = 0;
    for (let i = 1; i <= numInput; i++){
        if (numInput % i == 0){
            count++;
        }
    }
    if (count == 2 && numInput >= 1){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById("exBtn08").onclick = function(){
    var ex08_result = -1;
    for( let i = 0 ; i < arrNum.length; i++){
        if (isNguyenTo(arrNum[i])){
            ex08_result = arrNum[i];
            break;
        }
    }

    document.getElementById("ex08_result").innerHTML = ex08_result;
}

// BÀI TẬP 09----------------------------
// - Đầu vào:
//     + 1 mảng số thực
// - Xử lý:
//     + Duyệt qua mảng đếm số lượng số nguyên
// - Đầu ra:
//     + In ra số lượng số nguyên


var ex09_arrNum = [];
document.getElementById("ex09_btnAddEle").onclick = function () {
    var ex09_numAdded = document.getElementById("ex09_numAdded").value;
    if (ex09_numAdded != "") {
        var ex09_numAdded = Number(document.getElementById("ex09_numAdded").value);
        var ex09_arrNumContent = "";
        ex09_arrNum.push(ex09_numAdded);
        for (let i = 0; i < ex09_arrNum.length; i++) {
            ex09_arrNumContent += `${ex09_arrNum[i]} `;
        }
        document.getElementById("ex09_arrNumContent").innerHTML = ex09_arrNumContent;
    }
}

document.getElementById("exBtn09").onclick = function(){
    var ex09_count = 0;
    for( let i = 0 ; i < ex09_arrNum.length; i++){
        if (Number.isInteger(ex09_arrNum[i])){
            ex09_count++;
        }
    }

    document.getElementById("ex09_result").innerHTML = `Có ${ex09_count} số nguyên trong mảng số thực`;
}

// BÀI TẬP 10----------------------------
// - Đầu vào:
//     + 1 mảng số thực
// - Xử lý:
//     + Duyệt qua mảng đếm số lượng số nguyên dương và số dượng số nguyên âm, rồi so sánh
// - Đầu ra:
//     + In ra kết quả

document.getElementById("exBtn10").onclick = function(){
    var ex10_posCnt = 0;
    var ex10_navCnt = 0;
    var ex10_result ="";

    for( let i = 0 ; i < arrNum.length; i++){
        if (arrNum[i] < 0 ){
            ex10_navCnt++;
        }
        if (arrNum[i] > 0 ){
            ex10_posCnt++;
        }
    }

    if (ex10_posCnt > ex10_navCnt){
        ex10_result = `Số lượng số dương nhiều hơn số lượng số âm ${ex10_posCnt - ex10_navCnt} số`
    }
    else if (ex10_posCnt < ex10_navCnt){
        ex10_result = `Số lượng số âm nhiều hơn số lượng số dương ${ex10_navCnt - ex10_posCnt} số`
    }
    else{
        ex10_result = "Số lượng số dương băng số lượng số âm"
    }

    document.getElementById("ex10_result").innerHTML = ex10_result;
}