const { INTEGER } = require("sequelize");

async function submitOrder(event) {
    event.preventDefault();
//this function will be to submit order and subtract from stock
//function here will select the right pizza and ingriedients 
    const response = await fetch('/api/menu/order', {
        method: 'PUT',
        body: JSON.stringify({
            pizza_stock:INTEGER, 
            ingredient_stock:INTEGER
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
    }

}

//funct





document.querySelector('#meateor').addEventListener('click', submitOrder);

