$(function(){
    var speedLabel = $("#speed")[0];
    var current = speedLabel.innerHTML;
    speedLabel.innerHTML="";
    $("#increaseSpd").click(function(){
        speedLabel.innerHTML = (parseFloat(current)+0.25).toString()
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {todo: "increaseSpeed"})
        });
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "updateSpeed") {
        $("#speed")[0].innerHTML = request.speed;
    }
})