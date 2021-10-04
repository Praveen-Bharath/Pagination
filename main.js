// selecting element
const element = document.querySelector(".pagination ul");
let totalPages = 5;
let page = 1;

var data = {
"images": [{
  "img": "image/ecommerce.webp","name":"Home Page"
},
{
  "img": "image/mobile.webp","name":"Mobiles"

},
{
  "img": "image/electronics.webp","name":"Electronics"
},
{
"img": "image/fashion.jpg","name":"Fashion"
},
{
"img": "image/furniture.webp","name":"Furniture"
}
] };

element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
let liTag = '';
let active;
let beforePage = page - 1;
let afterPage = page + 1;
if(page > 1){ 
liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
}
for (var pagelength = beforePage; pagelength <= afterPage; pagelength++) {
if (pagelength > totalPages) { 
continue;
}
if (pagelength == 0) { 
pagelength = pagelength + 1;
}
if(page == pagelength){ 
active = "active";
document.getElementById("gallery").innerHTML=`<img src=${data.images[pagelength-1].img} class="image">`;
document.getElementById("photonames").innerHTML=data.images[pagelength-1].name;
}else{ 
active = "";
}
liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${pagelength})"><span>${pagelength}</span></li>`;
}

if (page < totalPages) {
liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
}
element.innerHTML = liTag; 
return liTag; 
}