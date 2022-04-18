//step one - controller accepts requests
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    displayValues(startValue, endValue);

}

//final step - view
function displayValues(start, end) {
    //first get the col element from the page
    element = document.getElementById("results");

    for (let i = start; i <= end; i++) {
        //next create a new div element
        let item = document.createElement("div");
        if (i % 2 == 0) {
            item.classList.add("boldItem");
        }
        else { 
            item.classList.add("redItem");
        }
        //add classes to the col element
        item.classList.add("col");
        //set the message for the col element
        item.innerHTML = i;
        //add new item to the col
        element.appendChild(item);
    };
};
// Clear button
function clear(){
    document.getElementById("results").innerHTML = "";
};
