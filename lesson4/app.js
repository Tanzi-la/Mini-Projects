let student=[
    {
    name:"Devid",
    age:28,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0ZexwS5ZbZSVkkANJnbJEuNSJNaQnhzq4nrn40GDOA&s=10",
    hobbies: [
     "Китеп окуу", "Футбол ойноо", "Сурот тартуу","Музыка угуу", "Саякаттоо"
    ]
},
{
    name:"Bob",
     age:20,
    img:"https://blog-cdn.aviata.kz/blog/posts/optimized/0_3b399c6a3cc3b45706109b72af1ad6af84948e5125d5aae7aa6427bcbc093f52.png.webp",
    hobbies: [
     "Теннис","Балык уулоо","Футбол","Саякаттоо"
    ]
},
{
    name:"Meri",
     age:24,
    img:"https://www.menslife.com/upload/images/2017/12/20-samykh-krasivykh-mest-na-planete3.jpg",
    hobbies: [
     "Бийлоо", "Ырдоо", "Тамак жасоо", "Волейбол ойноо"
    ]
},
{
    name:"Lily",
     age:18,
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnjBw_O02YDrTjoooYMmD8rnNuMMlGi7HsCr1I1LI0wNPlKzcGXU3NOlo&s=10",
    hobbies: [
     "Пианино ойноо", "Бийлоо", "Кулинария", "Гул остуруу"
    ]
},
{
    name:"Mia",
     age:17,
     img:"https://www.astons.com/wp-content/uploads/2024/02/article_toplychmest_1.webp",
    hobbies: [
     "Программалоо", "Велосипед тебуу", "Кино коруу", "Гитара ойноо"
    ]
},
{
    name:"Leo",
     age:28,
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19t9AL-z1etCN44msPOg7TPr7IslwNlB26dtu1g2KnKO5l6wAn2m7kAZ3&s=10",
    hobbies: [
     "Шахмат", "Баскетбол","Скейтборд тебуу"
    ]
},
{
    name:"Ella",
     age:15,
     img:"https://i.ytimg.com/vi/6SDsdhhjR64/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDYGnMJW7dFrpS9qrMNrwrJNHX3gg",
    hobbies: [
     "Кундолук жазуу", "Тигуу", "Чуркоо", "Видео тартуу"
    ]
},
{
    name:"Emily",
     age:23,
     img:"https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/06/2-Zhangye_Danxia_Landform-e1528945590663.jpg",
    hobbies: [
     "Пазл чогултуу", "Сууда сузуу", "Тил уйронуу", "Кун тартибин тузуу"
    ]
},
{
    name:"Daniel",
     age:21,
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEO7MX2H3BIO2x_FY_Yq4WM2dDgO0kn24dmWnpNdFEhzDh78YZ_MhF0Fm&s=10",
    hobbies: [
     "Курош", "Логикалык тапшырмаларды чечуу", "Жаа атуу"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
},
{
    name:"Alice",
     age:28,
     img:"https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?",
    hobbies:[
     "Дизайнер", "Актёрлук", "Бийлоо"
    ]
}
]
console.log(student[0].hobbies);
console.log(student[2].hobbies[3]);
console.log(student[3].name);
console.log(student[4].age);
console.log(student[7].hobbies[1]);
console.log(student[9].hobbies[2]);
console.log(student[1].img);


const html = student.map((item) => {
    return `
        <div class="card">
            <img src="${item.img}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Age: ${item.age}</p>

            <ul>
                ${item.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
            </ul>
        </div>
    `;
});

const container = document.querySelector('div');
container.innerHTML = html.join('');
