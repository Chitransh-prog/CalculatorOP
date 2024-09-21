const a=parseFloat(prompt("Enter the first Number:"));
const b=parseFloat(prompt("Enter the second Number:"));
const o=prompt("Enter the operator: +,-,*,/")
var x;
var r;
if (o=="+"){
    r=a+b;

}
else if (o=="-"){
    r=a-b;

}
else if (o=="/"){
    r=a/b;

}
else if (o=="*"){
    r=a*b;

}
else{
}

document.getElementById("num1").value=a;
document.getElementById("num2").value=b;
document.getElementById("o").value=o;
document.getElementById("r").value=r;