document.getElementById('number-1').onfocusout = function () {
    x = document.getElementById('number-1').value;
    if(isNaN(x)){
        document.getElementById('input-num-1').innerHTML = "Input not valid";
    } else {
        document.getElementById('input-num-1').innerHTML = "";
    }
}

document.getElementById('number-2').onfocusout = function () {
    y = document.getElementById('number-2').value;
    if(isNaN(y)){
        document.getElementById('input-num-2').innerHTML = "Input not valid";
    } else {
        document.getElementById('input-num-2').innerHTML = "";
    }
}


document.getElementById('caculate').onclick = function() {
    // Error announcement
    let errorAnnounce = "";
    let lineBreak = "</br>";
    let errorInput = "chưa được nhập.";
    let errorValue = " không phải giá trị là số."
    let arr = {input1: "<strong><i>Số thứ nhất</i></strong>", input2: "<strong><i>Số thứ hai</i></strong>" };
    
    let x = document.getElementById('number-1').value;
    let y = document.getElementById('number-2').value;

    

    if(x == ""){
        errorAnnounce += arr.input1 + " " + errorInput + lineBreak;
    } else if (isNaN(x)) {
        errorAnnounce += arr.input1 + " " + errorValue + lineBreak;
    } else {
        x = parseFloat(x);
    }

    if(y == ""){
        errorAnnounce += arr.input2 + " " + errorInput + lineBreak;
    } else if (isNaN(y)) {
        errorAnnounce += arr.input2 + " " + errorValue + lineBreak;
    } else {
        y = parseFloat(y);
    }

    
    // check for caculation 
    let tmp = "";
    let caculation = document.getElementsByName("phep-tinh");
    let result = 0;

    for(let i=0; i < caculation.length; i++) {
        if(caculation[i].checked)
            tmp = caculation[i].value; 
    }

    if(tmp == "+") {
        result = x + y;
    } else if(tmp == "-"){
        result = x - y;
    } else if(tmp == "*") {
        result = x * y;
    } else if(tmp == "/"){
        result = x / y;
    } else {
        errorAnnounce += "Chưa có <strong><i>phép tính</i></strong> nào được nhập."
    }

    let element = document.getElementById('announcement');
    if(errorAnnounce != ""){
        element.classList.add("alert-warning");
        errorAnnounce = "<h2><strong>WARNING:</strong></br></h2>" + errorAnnounce;
        result = "Không có kết quả";
    } else {
        element.classList.remove("alert-warning");
    }
    document.getElementById('announcement').innerHTML = errorAnnounce;
    document.getElementById('result').value = result;
}