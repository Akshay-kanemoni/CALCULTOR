var A, B, SUM, SUB,MUL, DIV;

console.log("Start the execution")

function addition() {
    A = parseInt(document.getElementById('text-1').value);
    B = parseInt(document.getElementById('text-2').value);
    sum = A + B;
    document.getElementById('result').value=sum;
    // console.log("The SUM of a and b : "+ sum);
}

function subtraction() {
    A = parseInt(document.getElementById('text-1').value);
    B = parseInt(document.getElementById('text-2').value);

    sub = A - B;
    document.getElementById('result').value=sub;
    // console.log("The SUB of a and b : "+ sub);
}

function multiplication() {
    A = parseInt(document.getElementById('text-1').value);
    B = parseInt(document.getElementById('text-2').value);

    mul = A * B;
    document.getElementById('result').value=mul;
    // console.log("The MUL of a and b : "+ mul);
}

function division() {
    A = parseInt(document.getElementById('text-1').value);
    B = parseInt(document.getElementById('text-2').value);

    div = A / B;
    document.getElementById('result').value=div;
    // console.log("The DIV of a and b : "+ div);
}





console.log("End of the Execution");