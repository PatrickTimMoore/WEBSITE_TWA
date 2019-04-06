var zzzz = new Date();
var Month = zzzz.getMonth();
var Day = zzzz.getDate();
var Year = zzzz.getYear();

if (Month == 9 && Day <= 26 && Year == 117) {
    alert("Sorry, tickets aren't on sale yet \n \nCheck back soon!");
    window.location = "index.html";
}
else if (Month <= 9 && Day <= 31 && Year == 117) {
    var password = "cogitoergosum";
    var x = prompt("Enter the Early-Access code: ","");
    if (x.toLowerCase() == password) {
        alert("Code confirmed. \n \nEnjoy the show!");
        window.location = "reservecogitoergosummurder2017FMK6ZM2AWB4.html";
    }
    else {
        alert("Sorry, that was incorrect. \nPre-Sale tickets are only available for families of actresses. \nSales officially start soon.");
        window.location = "index.html";
    }
}
else if (Month <= 10 && Day <= 11 && Year == 117) {
    window.location = "reservecogitoergosummurder2017FMK6ZM2AWB4.html";
}
else {
    alert("Sorry, sales appear to be over! We hope to see you at the next show!");
    window.location = "index.html";
}
