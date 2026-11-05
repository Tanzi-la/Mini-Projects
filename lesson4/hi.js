const container=document.querySelector('.container')

const API ='https://67d0143b823da0212a8480e9.mockapi.io/cakes'

fetch(API)
.then(response => response.json())

.then(data => (
    data.forEach( item => {
        const card=document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <p>${item.category}</p>
        <button>Add to cart</button>
        `

        container.appendChild(card)
    })
))
    
    


        
    
    


    
    