// UGx6IGRvbnQgY2hhbmdlIG1laA==

var zzzz = new Date();
var Month = zzzz.getMonth();
var Day = zzzz.getDate();
var Year = zzzz.getFullYear();

if (Month <= 1 && Year <= 2018) {
    alert("Sorry, tickets aren't on sale yet \n \nCheck back soon!");
    window.location = "index.html";
}
else if (Month == 2 && Day <= 10 && Year == 2018) {
    alert("Sorry, tickets aren't on sale yet \n \nCheck back soon!");
    window.location = "index.html";
}
else if (Month == 2 && Day <= 19 && Year == 2018) {
    var password = "rose";
    var x = prompt("Enter the Early-Access code: ","");
    if (x.toLowerCase() == password) {
        alert("Code confirmed. \n \nEnjoy the show!");
        window.location = "reserverosebeauty8XRQR8QK2J7PG.html";
    }
    else {
        alert("Sorry, that was incorrect. \nPre-Sale tickets are only available for families of actresses. \nSales officially start soon.");
        window.location = "index.html";
    }
}
else if (Month == 2 && Year == 2018) {
    window.location = "reserverosebeauty8XRQR8QK2J7PG.html";
}
else if (Month <= 3 && Day <= 22 && Year == 2018) {
    window.location = "reserverosebeauty8XRQR8QK2J7PG.html";
}
else {
    alert("Sorry, sales appear to be over! We hope to see you at the next show!");
    window.location = "index.html";
}