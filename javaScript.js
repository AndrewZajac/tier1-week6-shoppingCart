//onReady function wired up
document.addEventListener("DOMContentLoaded", onReady, false);

const cart = [];
const budget = 100.00;

function onReady(){
    console.log('DOM is ready');

    //update budget h2 with the correct amount
    const budgetElement = document.getElementById("budget");
    budgetElement.innerText = `Budget: $${budget}`;

    //call the renderRemaining function to update remaining amount
    renderRemainingBudget();
}

//form submit function
function submitForm(event){
    //we have to ask the form not to reload the page
    event.preventDefault();

    //grab references to the two inputs from the DOM
    const itemNameElement = document.getElementById("item-name");
    const itemPriceElement = document.getElementById("item-price");


    //build a new object with values from the user
    const newItem = {
        name: itemNameElement.value,
        price: itemPriceElement.value,
    }

    console.log(newItem);

    //push our new item to the global array
    cart.push(newItem);

    //clear the form
    itemNameElement.value ='';
    itemPriceElement.value ='0';

    //update the shopping list on the DOM
    renderShoppingCart();
    //update the remaining budget
    renderRemainingBudget();
}

function renderShoppingCart(){
    //loop over the global cart array
    //for every item in array, append a new list item with the name and price!
    const shoppingListElement = document.getElementById("shopping-list");
    shoppingListElement.innerHTML = '' //clears out all list items already there

    for(let i=0; i<cart.length; i++){
        console.log(cart[i]);//{name:'bananas', price:'10'}
        shoppingListElement.innerHTML += `
        <li>
            <strong>Name:</strong> ${cart[i].name} <strong>Price:</strong> ${cart[i].price}
            <button onclick="deleteItem(event)">Delete</button>
        </li>
        `
    }
}

function deleteItem(event){
    //grab element that was clicked on (delete button)
    const deleteButton = event.target;
    console.log(deleteButton);

    //find first ancestor and remove it
    //which will, in turn, remove the <li> that this button is in
    deleteButton.closest("li").remove();
}

function calculateRemaining(){
    //sum up the total in the cart
    let total = 0;
for (const item of cart){
    total += Number(item.price);
}
console.log(total);
    //calculate the remaining budget
    const remaining = budget - total;
    return remaining;
}

function renderRemainingBudget(){
    //calculate 
    const remaining = calculateRemaining();
    //update the DOM accordingly
    const paraElement = document.getElementById("remaining");
    paraElement.innerText = `${remaining} Remaining `;
}


//form submit function

//TODO:
//Function to calculate the remaining budget
//Function to render the shopping list to the DOM
//Function to render the calculated remaining budget to the DOM