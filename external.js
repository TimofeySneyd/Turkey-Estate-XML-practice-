function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            apartDetails(this);
        }
    };

    // property.xml is the external xml file
    xmlhttp.open("GET", "property.xml", true);
    xmlhttp.send();
}

function apartDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table =
        `<tr><th>Area</th><th>Street</th>
            <th>Bedrooms</th><th>Type</th>
            <th>Price</th><th>apartCode</th>
        </tr>`;
    var x = xmlDoc.getElementsByTagName("apartament");

    // Fetch Content by using tagnames from property.xml file 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("area")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("street")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("bedrooms")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("price")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("apartCode")[0]
            .childNodes[0].nodeValue + "</td></tr>";
    }

    // Display the xml content in a table form
    document.getElementById("id").innerHTML = table;
}
//booking appointment function/validation etc
function checkup(){
    var dataStorage = []; 
    dataStorage[0] = document.getElementById("infornationOfMessage").value; 			
    dataStorage[1] = document.getElementById("infornationOfEmail").value; 
    dataStorage[2] = document.getElementById("infornationOfName").value; 			
    
    if(dataStorage[0].length <2){
        document.getElementById("feedback").innerHTML = "";
    }
    
    var symbol = dataStorage[1].indexOf('@');
    if(symbol < 1){
        document.getElementById("emailFeedback").innerHTML = "Not A Valid Email";
    }
    
    if(dataStorage[2].length <2){
        document.getElementById("feedback").innerHTML = "Not A Valid Name";
    }
    
    }