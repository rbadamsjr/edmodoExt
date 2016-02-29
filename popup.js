
function onPageDetailsReceived(pageDetails)  {
    document.getElementById('username').value = pageDetails.username;
    document.getElementById('password').value = pageDetails.password;
    document.getElementById('edmodoData') = pageDetails.edmodoData;
}

var statusDisplay = null;
var ifrm = null;

function logInEdmodo(){
// Cancel the form submit
    event.preventDefault();

    var username = encodeURIComponent(document.getElementById('username').value);
    ifrm = window.frames['edmodoData'];
    var test = ifrm.contentDocument.getElementById('username');
     statusDisplay.innerHTML = 'Saving...';
}

window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    statusDisplay = document.getElementById('status-display');
  //  ifrm = document.getElementById('edmodoData');
 //   ifrm.contentWindow.document.forms['extention'].username.value = "test";
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('logIn').addEventListener('click', logInEdmodo);
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});