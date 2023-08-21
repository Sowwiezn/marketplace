const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let userA = document.getElementById('user-pr')
// let userProduct = document.getElementById('userProduct')

let xhr =  new XMLHttpRequest()
let urlA = 'https://my-json-server.typicode.com/Sowwiezn/marketplace'

// xhr.open('GET', `${urlA}/users/${id}`)
xhr.open('GET', `${urlA}/users/id`)
xhr.responseType = 'json'
xhr.onload = function(){
    let account = xhr.response
    //     let aElem = document.createElement('div')
    //     aElem.classList.add('profile')
    //     aElem.innerHTML = `
    //     <img src="${aElem.img}" class="imgP" alt="${aElem.name}">
    //     <h3 class="nameSurn">${aElem.name} ${aElem.surname}</h3>
    //     <p class="balanceP">${aElem.balance}</p>
    //     `
    console.log(account)
        }
xhr.send()

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
