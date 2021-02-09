const courses=[
    {
        name:"Complete ReactJs courses",
        price:"2.3"
    },
    {
        name:"Complete Angular courses",
        price:"3"
    },
    {
        name:"Complete C# courses",
        price:"2"
    },
    {
        name:"Complete ASP.NET MVC courses",
        price:"5"
    },

];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach( course=>{
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ "+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

window.addEventListener("load",generateList);
//generateList();

const button = document.querySelector(".btn");

button.addEventListener("click",()=>{
    courses.sort((a,b) => a.price - b.price);
    generateList();
});