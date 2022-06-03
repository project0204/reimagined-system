

async function submitOrder(event) {
    event.preventDefault();
//this function will be to submit order and subtract from stock
//function here will select the right pizza and ingriedients 
    const select =[
        sequelize.literal(
          "SELECT stock FROM ingredient MINUS SELECT perPizza FROM ingredient",
          "Where pizza_id in (1,2,3,4,5,6,7,8,9)"
        ),

    ]
    const update = [
        sequelize.literal(
            "UPDATE ingredient",
            "SET stock = stock - 1",

        )
    ]


    const response = await fetch('/api/pizzas', {

        method: 'PUT',
        body: JSON.stringify({
            pizza_stock:select,update
            // will change this based on each ingredient used 
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


document.querySelector('.Pepperoni').addEventListener('click', submitOrder);



