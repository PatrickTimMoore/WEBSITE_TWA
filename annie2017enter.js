var zzzz = new Date();
var Month = zzzz.getMonth();
var Day = zzzz.getDate();
var Year = zzzz.getYear();

if (Month == 2 && Day <= 11 && Year == 116) {
    alert("Sorry, tickets aren't on sale yet \n \nCheck back soon!");
    window.location = "index.html";
}
else if (Month == 2 && Day <= 16 && Year == 116) {
    var password = "hooverville";
    var x = prompt("Enter the Early-Access code: ","");
    if (x.toLowerCase() == password) {
        alert("Code confirmed. \n \nEnjoy the show!");
        window.location = "reservehoovervilleannie2017WVRECZSNW8R8.html";
    }
    else {
        alert("Sorry, that was incorrect. \nPre-Sale tickets are only available for families of actresses. \nSales officially start soon.");
        window.location = "index.html";
    }
}
else if (Month <= 2 && Year == 116) {
    window.location = "reservehoovervilleannie2017WVRECZSNW8R8.html";
}
else if (Month <= 3 && Day <= 8 && Year == 116) {
    window.location = "reservehoovervilleannie2017WVRECZSNW8R8.html";
}
else {
    alert("Sorry, sales appear to be over! We hope to see you at the next show!");
    window.location = "index.html";
}