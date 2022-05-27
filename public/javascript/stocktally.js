async function displayStock(event) {
    event.preventDefault();
//this function will display the stock to the stock tally page 
//function here will select the right pizza and ingriedients 
    const response = await fetch('/api/stocktally/stock', {
        method: 'GET',
        body: JSON.stringify({
            pizza_stock:INTEGER, 
            ingredient_stock:INTEGER,
            ingredient_name:String, 
            

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