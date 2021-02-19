import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"


class ShopService {
    constructor(){
        console.log("Service is Working!!")
    }
    funding(){
        ProxyState.funds += 100
    }

    purchase(itemName){
        let item = ProxyState.items.find(i=>i.name == itemName)
            if (ProxyState.funds >= item.price){
                item.quantity -= 1
                ProxyState.funds -= item.price
                ProxyState.items = ProxyState.items
                ProxyState.cart = [...ProxyState.cart,item]
            } else {
                alert("Not Enough Money, you're poor!!")
            }
    }
}

export const shopService = new ShopService()