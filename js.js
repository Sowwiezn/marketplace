let gridProduct = document.getElementById("grid-products")
let cartProduct = document.getElementById("cart-products")
let array = []
let xhr = new XMLHttpRequest()
let url = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'

xhr.open('GET', url +'/products')
xhr.responseType = 'json'
xhr.onload = function(){
    let products = xhr.response
    gridProduct.innerHTML = null
    products.forEach(p => {
      array.push(p)
      let pElem = document.createElement('div')
      pElem.classList.add('product')
      pElem.innerHTML = `
        <h2 class="product-name">${p.name}</h2>
        <img src="${p.img}" class="product-img" alt="${p.name}">
        <p class="product-price"><b>Price: </b>${p.price}</p>
        <p class="product-description"><b>Description: </b>${p.description}</p>
        <a href="userP.html?id=${p.author_id}">Seller profile</a>
        <button>Buy</button>
      `
      gridProduct.append(pElem) 
    });
}
xhr.send()

let cart = [];
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    drawCartProducts();
}

function cartOpen(){
  cartProduct.classList.toggle('hide')
}