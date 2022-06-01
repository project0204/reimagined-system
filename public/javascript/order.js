const { INTEGER } = require("sequelize");

async function submitOrder(event) {
    event.preventDefault();
//this function will be to submit order and subtract from stock
//function here will select the right pizza and ingriedients 
    const decrease =[
        sequelize.literal(
            "UPDATE ingredient",
          "SELECT stock FROM ingredient MINUS SELECT perPizza FROM ingredient",
          "SET stock = stock - 1",
          "Where pizza_id in (1,2,3,4,5,6,7,8,9)"
        ),

    ]


    const response = await fetch('/api/pizzas', {

        method: 'PUT',
        body: JSON.stringify({
            pizza_stock:decrease,
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
// async function submitOrder2(event) {
//     event.preventDefault();
// //this function will be to submit order and subtract from stock
// //function here will select the right pizza and ingriedients 
//     const decrease = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch('/api/menu/order/id:2', {
//         method: 'PUT',
//         body: JSON.stringify({
//             pizza_stock:decrease, 
//             ingredient_stock:decrease
//             // will change this based on each ingredient used 
//         }),
//         headers: {
//         'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//     }

// }
// async function submitOrder3(event) {
//     event.preventDefault();
// //this function will be to submit order and subtract from stock
// //function here will select the right pizza and ingriedients 
//     const decrease = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch('/api/menu/order/id:3', {
//         method: 'PUT',
//         body: JSON.stringify({
//             pizza_stock:decrease, 
//             ingredient_stock:decrease
//             // will change this based on each ingredient used 
//         }),
//         headers: {
//         'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//     }

// }
// async function submitOrder4(event) {
//     event.preventDefault();
// //this function will be to submit order and subtract from stock
// //function here will select the right pizza and ingriedients 
//     const decrease = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch('/api/menu/order/id:4', {
//         method: 'PUT',
//         body: JSON.stringify({
//             pizza_stock:decrease, 
//             ingredient_stock:decrease
//             // will change this based on each ingredient used 
//         }),
//         headers: {
//         'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//     }

// }
// async function submitOrder5(event) {
//     event.preventDefault();
// //this function will be to submit order and subtract from stock
// //function here will select the right pizza and ingriedients 
//     const decrease = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch('/api/menu/order/id:5', {
//         method: 'PUT',
//         body: JSON.stringify({
//             pizza_stock:decrease, 
//             ingredient_stock:decrease
//             // will change this based on each ingredient used 
//         }),
//         headers: {
//         'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//     }

// }

//funct





document.querySelector('#{{pizza.title}}').addEventListener('click', submitOrder);



