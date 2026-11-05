const todos=document.querySelector('.todos')

const API='https://jsonplaceholder.typicode.com/posts'

fetch(API)
.then(response => response.json())
.then(list =>(
    list.forEach(item => {
        const content=document.createElement('div')
        content.classList.add('content')
        content.innerHTML=`
        <h3>${item.userId}</h3>
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        `
        todos.appendChild(content)
    })
))


