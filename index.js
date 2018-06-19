var url = "https://westeurope.api.cognitive.microsoft.com/luis/v2.0/apps/fb1ba974-ac5c-40f2-8236-faf5a657df49?subscription-key=3bfef3d064f24ccb8eaa4edab7305499&verbose=true&timezoneOffset=0&q=";


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