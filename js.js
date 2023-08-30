let gridProduct = document.getElementById("grid-products")
let products = []
let xhr = new XMLHttpRequest()
let url = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'

xhr.open('GET', url +'/products')
xhr.responseType = 'json'
xhr.onload = function(){
    products = xhr.response
    gridProduct.innerHTML = null
    products.forEach(p => {
      products.push(p)
      let pElem = document.createElement('div')
      pElem.classList.add('product')
      pElem.innerHTML = `
        <h2 class="product-name">${p.name}</h2>
        <img src="${p.img}" class="product-img" alt="${p.name}">
        <p class="product-price"><b>Price: </b>${p.price}</p>
        <p class="product-description"><b>Description: </b>${p.description}</p>
        <a href="userP.html?id=${p.author_id}">Seller profile</a>
        <button onclick="addProductToCart(${p.id})">Buy</button>
      `
      gridProduct.append(pElem) 
    });
}
xhr.send()

let cartProduct = document.getElementById("cart-products")
let cart = [];
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    drawCartProducts();
}

function addProductToCart(id){
  let product = products.find(function(p){
    return p.id == id
  })
  cart.push(product)
  drawCartProducts()
  localStorage.setItem("cart", JSON.stringify(cart))
  document.getElementById("cart-bttn").classList.add("active")
  setTimeout(function(){
    document.getElementById("cart-bttn").classList.remove("active")
  }, 500)
}

function drawCartProducts(){
  if(cart.length === 0) return cartProduct.innerHTML = 'Cart is empty';
    cartProduct.innerHTML = null;
    let sum = 0;
    cart.forEach(function(p){
             cartProduct.innerHTML += `
             <p><img src="${p.img}"> ${p.name} |${p.price}$</p>
             <hr>
            `
        sum += p.price;
    });
    cartProduct.innerHTML += `
        <p>Total Price: ${sum}$</p>
        <button onclick="buyAll()">Buy All</button>
        `
}

function cartOpen(){
  cartProduct.classList.toggle('hide')
}