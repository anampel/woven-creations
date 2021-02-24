$(document).ready(function() {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function() {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function() {
        $("#mycarousel").carousel('cycle');
    });
});
var myaddress = document.getElementById("address");
var myaddressInfo = document.getElementById("addressInfo");
var a = document.getElementById("vis");
var check1 = document.getElementById("yes");
var check2 = document.getElementById("no");
var st1 = document.getElementById("numOfGram")
var st2 = document.getElementById("numOfGram");

var gram = [50, 100, 150, 200];
document.getElementById("numOfGram11").innerHTML = gram[0];
document.getElementById("numOfGram22").innerHTML = gram[1];
document.getElementById("numOfGram33").innerHTML = gram[2];
document.getElementById("numOfGram44").innerHTML = gram[3];

st2.onchange = function() {
    quantity = document.getElementById("numOfGram").value
    if (isNaN(quantity)) {
        console.log("This is not a number")
    } else {
        console.log(quantity);
    }
}

var type = ["Dark Choco", "White Choco", "Milk Choco", "Cocoa", "Choco Bars"];
document.getElementById("typeOfChoco11").innerHTML = type[0];
document.getElementById("typeOfChoco22").innerHTML = type[1];
document.getElementById("typeOfChoco33").innerHTML = type[2];
document.getElementById("typeOfChoco44").innerHTML = type[3];
document.getElementById("typeOfChoco55").innerHTML = type[4];


var completBtn = document.getElementById("Complete");
completBtn.onclick = function() {
    if (document.getElementById("typeOfChoco1").checked) {
        var totalPrice = (quantity * 1) / 100;
        var n = totalPrice.toFixed(2);
        alert(n + "$");
    } else if (document.getElementById("typeOfChoco2").checked) {
        var totalPrice1 = (quantity * 2) / 100;
        var n1 = totalPrice1.toFixed(2);
        alert(n1 + "$");
    } else if (document.getElementById("typeOfChoco3").checked) {
        var totalPrice2 = (quantity * 3) / 100;
        var n2 = totalPrice2.toFixed(2);
        alert(n2 + "$");
    } else if (document.getElementById("typeOfChoco4").checked) {
        var totalPrice3 = (quantity * 4) / 1000;
        var n3 = totalPrice3.toFixed(2);
        alert(n3 + "$");
    } else if (document.getElementById("typeOfChoco5").checked) {
        var totalPrice4 = (quantity * 5) / 1000;
        var n4 = totalPrice4.toFixed(2);
        alert(n4 + "$");
    } else {

    }
}

myaddress.oninput = function() {
    if (!this.validity.valid) {
        myaddress.style.border = "solid 3px red";
        myaddressInfo.innerHTML = "Your address must be in the correct format. "
    } else {
        myaddress.style.borderColor = "green";
        mymailInfo.style.display = "none"
    }
}

a.style.visibility = "hidden";
check1.onfocus = function() {
    a.style.visibility = "visible";
}
check2.onfocus = function() {
    a.style.visibility = "hidden";
}