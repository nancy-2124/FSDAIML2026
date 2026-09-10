let btn=document.getElementById("btn");
btn.addEventListener("click", function(){
    let root=document.getElementById("root");
    let heading=document.createElement("h1");
    heading.innerText="Resume";
    let name=document.createElement("p");
    name.innerText="Nancy Pal";
    root.appendChild(heading);
    root.appendChild(name);
});
   
    
    
