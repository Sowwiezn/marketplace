const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile')
// let userProduct = document.getElementById('userProduct')

let xhrU =  new XMLHttpRequest()
let urlA = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'

xhrU.open('GET', `${urlA}/users/${id}`)
xhrU.responseType = 'json'
xhrU.onload = function(){
    let account = xhrU.response
        profile.innerHTML = `
            <h1>${account.name}</h1>
            <img src="${account.img}" class="imgP" alt="${account.name}">
            <h3 class="nameSurn">${account.surname}</h3>
            <p class="balanceP">${account.balance}</p>
        `
        console.log(account)
        }
xhrU.send()

// let xhrP = new XMLHttpRequest
// let urlP = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'
// let arrayP = []

// xhrP.open('GET', urlP +'/product')
// xhrP.responseType = 'json'
// xhrP.onload = function(){
//     let product = xhrP.response
//     userProduct.innerHTML = null
//     product.forEach(p => {
//         arrayP.push(p)
//         let pElem = document.createElement('div')
//         pElem.classList.add('products')
//         pElem.innerHTML = `
//         <h2 class="product-name">${p.name}</h2>
//         <img src="${p.img}" class="product-img" alt="${p.name}">
//         <p class="product-price"><b>Price: </b>${p.price}</p>
//         <p class="product-description"><b>Description: </b>${p.description}</p>
//         `       
//     userProduct.append(aElem)
//     });
//     console.log(account)
// }
// xhrP.send()
