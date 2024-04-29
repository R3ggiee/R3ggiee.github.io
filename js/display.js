



// Function to open the selected tab and hide others
function openTab(evt, tabName) {
    // Get all elements with class="tabContent" and hide them
    var tabContent = document.getElementsByClassName("tabContent");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // Get all elements with class="tab" and remove the "active" class
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    // Show the selected tab and set it as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Initially hide all tab contents except the first one
var tabContents = document.getElementsByClassName("tabContent");
for (var i = 1; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
}

