let count = 0;

function addToCart(){
count++;
document.getElementById("cart-count").innerText = count;
alert("Product Added to Cart");
}

function goToOrder(){
window.location.href = "order.html";
}

function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function submitBlog(){
let input = document.getElementById("blogInput").value;
if(input.trim() !== ""){
let div = document.createElement("p");
div.innerText = input;
document.getElementById("blogPosts").appendChild(div);
document.getElementById("blogInput").value="";
}
}