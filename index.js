var x = +prompt("введите 1-e число");
var n = +prompt("введите 2-e число");

sum = x + n;

var isInvalidData = Number.isNaN(x) || Number.isNaN(n);

if (isInvalidData) {
    alert("введёные данные не действительны, попробуйте ещё раз");
    x = +prompt("введите 1-e число");
    n = +prompt("введите 2-e число");
}

else {
    alert(sum.toFixed(2));
}

