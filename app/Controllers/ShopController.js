import { shopService } from "../Services/ShopService.js"
import { ProxyState } from "../AppState.js"

function _drawFunds(){
    document.getElementById("funds").innerText = ProxyState.funds.toString()
}
function _draw(){
    let itemElem = document.getElementById("items")
    let template = ""
    let cartElem = document.getElementById("cart")
    let CartTemplate = ""
    ProxyState.items.forEach(item => template += item.Template)
    itemElem.innerHTML = template
    ProxyState.items.forEach(item => CartTemplate += item.CartTemplate)
    cartElem.innerHTML = CartTemplate
    
}
export default class ShopController{

constructor(){
    console.log("controller is working!!")
    ProxyState.on("funds", _drawFunds)
    ProxyState.on("items", _draw)
    _draw()
    }

funding(){
    shopService.funding()
}
purchase(itemName){
    //console.log(this.purchase)
    shopService.purchase(itemName)
    _draw()
}

}

