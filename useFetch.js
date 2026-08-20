const div=document.getElementById('container')
const button=document.getElementById('btn')
console.log(div);
const h2=document.createElement('h2');
h2.innerText="Data is loading.....";
// div.appendChild(h2);
console.log(h2);
function cart(){
    alert("cart is calling")
}
async function display(){
    try{
        div.appendChild(h2);
// div.innerHTML='<h2>Welcome to the page</h2>';
const serverdata= await fetch('https://fakestoreapi.com/products');
const jsonData= await serverdata.json();
// console.log(jsonData)
// console.log(jsonData[1].title)
// div.innerHTML=`<h2>${jsonData[1].title}</h2>`;
// div.innerHTML=`<h2 style=color:blue>${JSON.stringify(jsonData)}</h2>`;

// whenever displaying data from server or anywhere we use ${} or ``.
let table=`<table border=4px>
<tr><th>Image</th><th>Item_id</th><th>Item_Title</th><th>Item_Price</th></tr>
${
    jsonData.map((ele)=>{
        return `<tr>
        <td><img src=${ele.image} height=200 width=200/></td>
        <td>${ele.id}</td>
        <td>${ele.title}</td>
        <td>${ele.price}</td>
        <td><button onclick=cart()>Add to cart</button></td>
        </tr>`
    })
}
</table>`
div.innerHTML=table;
}catch(e){
    console.log("error is:"+e);
}
finally{
    div.removeChild(h2);
}
}
button.addEventListener('click',display);
