const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile')


let xhrU =  new XMLHttpRequest()
let urlA = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'

xhrU.open('GET', `${urlA}/users/${id}`)
xhrU.responseType = 'json'
xhrU.onload = function(){
    let account = xhrU.response
        profile.innerHTML = `

            <img src="${account.img}" id="imgP" alt="${account.name}">
            <h2 id="name" >${account.name} ${account.surname}</h2>
            <p id="balanceP"><b>Balance: ${account.balance}</b></p>
        `
        
        }
xhrU.send()

let products = document.getElementById('products')
let xhrP = new XMLHttpRequest()
let urlP = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'

xhrP.open('GET',`${urlP}/products?author_id=${id}`)
xhrP.responseType = 'json'
xhrP.onload = function(){
    let product = xhrP.response
    products.innerHTML = null
    product.forEach(p => {
        products.innerHTML += `
        <h2 id="product-name">${p.name}</h2>
        <img src="${p.img}" id="product-img" alt="${p.name}">
        <p id="product-price"><b>Price: </b>${p.price}</p>
        <p id="product-description"><b>Description: </b>${p.description}</p>
        `       
    });
    console.log(product)
}
xhrP.send()
