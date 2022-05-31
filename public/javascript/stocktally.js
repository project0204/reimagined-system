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


//function to add data into db 
async function addIngredient(event) {
    event.preventDefault();
  
    const ingredient_input = document.querySelector('textarea[name="ingrediantInput"]').value.trim();
    const stock_input = document.querySelector('textarea[name="stockInput"]').value.trim();
  
  
    const ingredient_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (ingredient_input) {
      const response = await fetch('/api/ingredients', {
        method: 'POST',
        body: JSON.stringify({
          ingredient_id,
          ingredient_input,
          stock_input
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
}
  
document.querySelector('.addStock').addEventListener('submit', addIngredient);

  
