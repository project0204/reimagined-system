async function submitOrder(event) {
    event.preventDefault();
//this function will be to submit order and subtract from stock
//function here will select the right pizza and ingriedients 
    const select =[
        sequelize.literal(
          "SELECT stock FROM ingredient MINUS SELECT perPizza FROM ingredient",
          "Where pizza_id in (1,2,3,4,5,6,7,8,9)"
          //need one query to get the current value of the stock which is going to be selected 
        ),

    ]
    const update = [
        sequelize.literal(
            "UPDATE ingredient",
            "SET stock = stock - 1",
            //another query to update with the new value 
        )
    ]


    const response = await fetch('/api/pizzas', {

        method: 'PUT',
        body: JSON.stringify({
            select,
            update//not sure if this is correct 
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


document.querySelector('#').addEventListener('click', submitOrder);//need to find a way to reference eahc pizza order card since they have different id
