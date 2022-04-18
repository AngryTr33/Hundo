// Step one - controller accepts requests
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    // Calls next function
    displayValues(startValue, endValue);
};
// Final step - view
function displayValues(start, end) {
    // First get the column element from the page
    element = document.getElementById("results");

    for (let i = start; i <= end; i++) {
        // Next create a new div element
        let item = document.createElement("div");
        if(i % 2 == 0) {
            item.classList.add("boldItem");
        }else{ 
            item.classList.add("redItem");
        };
        // Add classes to the column element
        item.classList.add("col");
        // Set the message for the column element
        item.innerHTML = i;
        // Add new item to the column
        element.appendChild(item);
    };
};
// Clear button
function clear(){
    document.getElementById("results").innerHTML = "";
};
