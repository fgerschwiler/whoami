var url = "https://westeurope.api.cognitive.microsoft.com/luis/v2.0/apps/fb1ba974-ac5c-40f2-8236-faf5a657df49?subscription-key=3bfef3d064f24ccb8eaa4edab7305499&verbose=true&timezoneOffset=0&q=";
var apiKey = ""



function loadData() {
  /*   window.addEventListener('load', function load(event) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://chat.lump.ch/receive_data.php', true); // async = true
    xhr.setRequestHeader('Accept', 'text/html');
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var msgstring = xhr.responseText;
            this.messages = JSON.parse(msgstring);
    
            this.messages.forEach(msg => {
                document.getElementById('chatrunning').innerHTML += generateMsgHTML(msg); 
            });
        }};
        xhr.send();
    }); */
}

function sendQuestion() {
    /* var form = document.getElementById("questionform");
    var data = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://chat.lump.ch/send_data.php', true);
    xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText); // Output: Hallo Client!
    }};
    xhr.send(data); */
}

$(document).ready(function(){
    $("#sendButton").click(function(){
        console.log("Sennd Question");
        
        var fullurl = url + $("#question").val();
        console.log(fullurl);
        $.ajax({
            type: "GET",
            url: fullurl,
            crossDomain: true,
            success: function(data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            }
        });
    });
});

var subscriptionKey = "14f36810bcf046209f79ba69a13deabe";
var applicationKey = "fb1ba974-ac5c-40f2-8236-faf5a657df49";
var baseUrl = "https://westeurope.api.cognitive.microsoft.com/luis/";
var apiUrl = baseUrl + "api/v2.0/apps/";
var appVersion = "0.2";

$(document).ready(getAllEntitiesFromLuis);

function getAllEntitiesFromLuis() {
var entitiesUrl = apiUrl + applicationKey + "/versions/" + appVersion + "/entities/";

$.ajax({
        url: entitiesUrl,
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "GET",
        })
        .done(function(data) {
            console.log("Intent: " + JSON.stringify(data));
            var entities = data[1];

           for (entity of data)
            {
                $("#response").append($('<p>' + entity.name + '</p>'));
                $("#response").append($('<ul>'));
                for (role of entity.roles){
                    $("#response").append($('<li>' + role.name + '</li>'));
                    if (entity.name == "Tier"){
                        $("#animals").append($('<option value="' + role.name + '">'  + role.name +  '</option>'));
                    }
                } 
                $("#response").append($('</ul>'));
            }
        })
        .fail(function() {
            console.error("error");
        });    
};

function CeckedEntityInsertIntoDatabase(id, name){
    if (getEntityFromDatabaseWithId(id) == null){
        insertEntityIntoDatabase(id,name);
    }
}

function getEntityFromDatabaseWithId(id){
    return false;
}

function updateEntityIntoDatabase(id, name){
    //mit PUT update (wenn nicht vorhanden wir automatisch eingefügt)
}
