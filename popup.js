
function onPageDetailsReceived(pageDetails)  {
    document.getElementById('username').value = pageDetails.username;
    document.getElementById('password').value = pageDetails.password;
}

var statusDisplay = null;

function logInEdmodo(){
// Cancel the form submit
    event.preventDefault();

    var username = encodeURIComponent(document.getElementById('username').value);
    var iframe = document.getElementById('edmodoData');

     statusDisplay.innerHTML = 'Saving...';
}

window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    statusDisplay = document.getElementById('status-display');
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('logInEdmodo').addEventListener('click', logInEdmodo);
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});