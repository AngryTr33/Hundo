//step one - controller accepts requests
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    displayValues(startValue, endValue);

}

//final step - view
function displayValues(start, end) {
    //first get the ol element from the page
    element = document.getElementById("results");

    for (let i = start; i <= end; i++) {

        //next create a new li element
        let item = document.createElement("li");

        if (i % 2 == 0) {
            item.classList.add("boldItem");
        }
        else { 
            item.classList.add("redItem");
        }

        //add classes to the li element
        item.classList.add("list-group-item");

        //set the message for the li element
        item.innerHTML = i;

        //add new item to the li
        element.appendChild(item);

    }




}