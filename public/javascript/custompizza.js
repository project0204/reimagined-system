
const customPizza = event => {
  event.preventDefault();

  const pizzaName = document.querySelector('#pizza-name').value;
  const size = document.querySelector('#pizza-size').value;
  const toppings = [...document.querySelectorAll('[name=topping]:checked')].map(topping => {
    return topping.value;
  });
// if null 
  if (!pizzaName || !size || !toppings.length) {
    return;
  }
// combine into array to push to db
  const formData = { pizzaName, size, toppings };

  fetch('/api/order/pizzas', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      alert('Pizza created');
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
    });

};