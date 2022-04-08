//step one - controller accepts requests
function getMessage() {
    let msg = document.getElementById("message").value;
    displayMessage(msg);

}

//final step - view
function displayMessage(message) {
    // <li class="list-group-item">A list item</li>
    //first get the ol element from the page
    element = document.getElementById("results");
    //next create a new li element
    let item = document.createElement("li");
    //add classes to the li element
    item.classList.add("list-group-item");
    //set the message for the li element
    item.innerHTML = message;
    //add new item to the li
    element.appendChild(item);
}