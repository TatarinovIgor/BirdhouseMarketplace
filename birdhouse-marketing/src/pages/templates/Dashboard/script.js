
window.onload = function() {
    // Get the value
    var Balance = "0";

    // Display the value on the page
    var outputBalance = document.getElementById('UserBalance');
    outputBalance.innerText = "Balance: " + Balance;


    var s1 = document.getElementById("section-1");
    s1.style.display = "none"
    var s2 = document.getElementById("section-2");
    s2.style.display = "none"
    var s3 = document.getElementById("section-3");
    s3.style.display = "none"
    var s4 = document.getElementById("section-4");
    s4.style.display = "none"
    var s5 = document.getElementById("section-5");
    s5.style.display = "none"
    var s6 = document.getElementById("section-6");
    s6.style.display = "none"

    SetSection1();
};

    function SetSection1(){
    var s1 = document.getElementById("section-1");
    s1.style.display = "block"
    var s2 = document.getElementById("section-2");
    s2.style.display = "none"
    var s3 = document.getElementById("section-3");
    s3.style.display = "none"
    var s4 = document.getElementById("section-4");
    s4.style.display = "none"
    var s5 = document.getElementById("section-5");
    s5.style.display = "none"
    var s6 = document.getElementById("section-6");
    s6.style.display = "none"
}
    function SetSection2(){
    var s1 = document.getElementById("section-1");
    s1.style.display = "none"
    var s2 = document.getElementById("section-2");
    s2.style.display = "block"
    var s3 = document.getElementById("section-3");
    s3.style.display = "none"
    var s4 = document.getElementById("section-4");
    s4.style.display = "none"
    var s5 = document.getElementById("section-5");
    s5.style.display = "none"
    var s6 = document.getElementById("section-6");
    s6.style.display = "none"
}
    function SetSection3(){
    var s1 = document.getElementById("section-1");
    s1.style.display = "none"
    var s2 = document.getElementById("section-2");
    s2.style.display = "none"
    var s3 = document.getElementById("section-3");
    s3.style.display = "block"
    var s4 = document.getElementById("section-4");
    s4.style.display = "none"
    var s5 = document.getElementById("section-5");
    s5.style.display = "none"
    var s6 = document.getElementById("section-6");
    s6.style.display = "none"
}
    function SetSection4(){
    var s1 = document.getElementById("section-1");
    s1.style.display = "none"
    var s2 = document.getElementById("section-2");
    s2.style.display = "none"
    var s3 = document.getElementById("section-3");
    s3.style.display = "none"
    var s4 = document.getElementById("section-4");
    s4.style.display = "block"
    var s5 = document.getElementById("section-5");
    s5.style.display = "none"
    var s6 = document.getElementById("section-6");
    s6.style.display = "none"
}
    function SetSection5(){
    var s1 = document.getElementById("section-1");
    s1.style.display = "none"
    var s2 = document.getElementById("section-2");
    s2.style.display = "none"
    var s3 = document.getElementById("section-3");
    s3.style.display = "none"
    var s4 = document.getElementById("section-4");
    s4.style.display = "none"
    var s5 = document.getElementById("section-5");
    s5.style.display = "block"
    var s6 = document.getElementById("section-6");
    s6.style.display = "none"
}
    function SetSection6(){
    var s1 = document.getElementById("section-1");
    s1.style.display = "none"
    var s2 = document.getElementById("section-2");
    s2.style.display = "none"
    var s3 = document.getElementById("section-3");
    s3.style.display = "none"
    var s4 = document.getElementById("section-4");
    s4.style.display = "none"
    var s5 = document.getElementById("section-5");
    s5.style.display = "none"
    var s6 = document.getElementById("section-6");
    s6.style.display = "block"
}

    function Logout(){
    console.log("logout todo")
}


    function ParseResponse(jsonString) {

}

function GetOrders() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            ParseResponse(xhttp.responseText);
        }
        baseHeaders = ["Content-Type", "application/json;charset=UTF-8"];
        xhttp.open("GET", "/crm/api/v1/partners/{{guid}}/services", true);
        xhttp.setRequestHeader(baseHeaders);
        xhttp.send();
    }
}
function CreateOrder() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        ParseResponse(xhttp.responseText);
    }
    baseHeaders = ["Content-Type", "application/json;charset=UTF-8"];
    payload = {};
    xhttp.open("POST", "{{url}}/crm/api/v1/services", true);
    xhttp.setRequestHeader(baseHeaders);
    xhttp.send(JSON.stringify(payload));
    };
}