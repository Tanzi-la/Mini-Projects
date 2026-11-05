const list=document.querySelector('#list')
const inputs=document.querySelectorAll('input')
const add=document.querySelector('#add')
//CRUD Http method

const url='https://6a9fd7a03e0d88d3d7e51344.mockapi.io/products'
async function getProducts(){
    try{
        const res=await fetch(url)
        const data=await res.json()
        console.log(data);
        showProducts(data)
        }     catch(err){
        console.log(err);
        
    }
}
getProducts()

function showProducts(arr){
    for (const pr of arr) { 
        list.innerHTML+=`
        <li>
        <h4  onclick="delProducts(${pr.id})">${pr.name}</h4>
        <img src=${pr.image} alt=${pr.image}/>  
        <button onclick="changeProduct(${pr.id})">Update</button>
        </li>
        `
        
    }
}


async function delProducts(id) {
    try{
        const res=await fetch(url+'/'+id, {
            method:'DELETE' ,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data=await res.json()
        console.log(data);
        getProducts()

    } catch(err){
        console.log(err);
        
    }
    
}

async function changeProduct(id) {
    const inputTitle=prompt("Enter title")
    const img=prompt("Enter image url")
    const res=await fetch(`${url}/${id}` ,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({title: inputTitle, image: img})
    })
    const data=await res.json()
    getProducts()
}

async function createProduct(params) {
    const res=await fetch(url, {
        method:"POST",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title: inputs[0].value,
            price: inputs[1].value,
            image: inputs[2].value
        })
    })
    const data=await res.json()
    console.log(data);
    
    getProducts()    
}
add.onclick=()=>{
    createProduct()
}