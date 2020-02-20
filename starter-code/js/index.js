var $cart = document.querySelector('#cart tbody'); //cartElement instead of $cart
var $calc = document.getElementById('calc'); //caclElement instead of $calc


//we define this function adn want this to work on a single row
function updateSubtot($product) { //productElement instead of $product
  // Iteration 1.1
  // if($product.querySelector("tr")===){
    let price=$product.querySelector(".pu span").innerHTML
    console.log(price)
    let qtyInput=$product.querySelectorAll(".qty input")[0]
    console.log(qtyInput.value)
  // }
  
  let subTotal=$product.querySelector(".subtot span").innerHTML
  subTotal=price*qtyInput.value
  return $product.querySelector(".subtot span").innerHTML=subTotal
  //Quantity Inputs
  
}

function calcAllHandler() { //event in the parameter tell us the information about many things
                            //event.currentTarget, gives us the button that was clicked!
  // Iteration 1.2
  let allProducts = document.querySelectorAll(".product")
  let total=0
  for(let i=0;i<allProducts.length;i++){
    total+=updateSubtot(allProducts[i])
  }
  //Another way!
  /*
  let allProductsElements=document.getElementByClassName("porduct")
  for(let i=0;i<allProductsElements.length;i++){
    updateSubtot(allProductsElements("product")[i])
  }
  */
  
  // let subtot1=updateSubtot(document.querySelectorAll(".product")[0])
  // let subtot2=updateSubtot(document.querySelectorAll(".product")[1])
  // let subtot3=updateSubtot(document.querySelectorAll(".new")[0])
  // let total=0;
  // total=subtot1+subtot2+subtot3
  //console.log(total)
  return document.querySelector("h2 span").innerHTML=total

}
$calc.onclick = calcAllHandler;


let allDeleteBtns=document.getElementsByClassName("btn btn-delete")
for(let i=0;i<allDeleteBtns.length;i++){
  let deleteBtn=document.getElementsByClassName("btn btn-delete")[i]
  deleteBtn.onclick=function(e){
    e.currentTarget.parentElement.parentElement.remove()
  }
}

// let deleteBtn=document.getElementsByClassName("btn btn-delete")[0]
// deleteBtn.onclick=function(e){
//   e.currentTarget.parentElement.parentElement.remove()
// }
// let deleteBtn1=document.getElementsByClassName("btn btn-delete")[1]
// deleteBtn1.onclick=function(e){
//   e.currentTarget.parentElement.parentElement.remove()
// }


let createBtn=document.getElementById("create")
createBtn.onclick=function(e){
  let productName=document.querySelectorAll(".new input")[0].value
  //console.log(productName)
  let price=document.querySelectorAll(".new input")[1].value
  // let newProduct = document.createElement("tr")
  // document.querySelectorAll("tbody")[0].appendChild(newProduct)

  let newProduct = document.querySelectorAll(".product")[0].cloneNode(true)
  let deleteBtn=newProduct.getElementsByClassName("btn btn-delete")[0]
  deleteBtn.onclick=function(e){
    e.currentTarget.parentElement.parentElement.remove()
  }
  document.querySelectorAll("tbody")[0].appendChild(newProduct)

  newProduct.querySelector(".name span").innerHTML=productName
  newProduct.querySelector(".pu span").innerHTML=price
  
}


// function calcAllHandler(){
//   let allProductsElements=document.getElementByClassName("product")
//   for(let i=0;i<allProductsElements.length;i++){
//     let price=allProductsElements[i].querySelector(".pu span").innerHTML
//     console.log(price)
//     let qtyInput=allProductsElements[i].querySelectorAll(".qty input")[0]
//     console.log(qtyInput.value)
//   let subTotal=allProductsElements[i].querySelector(".subtot span").innerHTML
//   subTotal=price*qtyInput.value
//   return $product.querySelector(".subtot span").innerHTML=subTotal
//   }
// }