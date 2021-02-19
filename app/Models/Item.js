import {generateId} from "../Utils/GenerateId.js"
export default class Item{
    constructor({name, quantity, price}){
        this.name = name,
        this.quantity = quantity, 
        this.price =price
        this.id = generateId()
    }
    get Template (){
        return /*html*/ `<div class="col-3 card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.price}</p>
        <p class="card-text">${this.quantity} <span id="VANSquant"></span></p>
        <button class="btn btn-success" onclick="app.shopController.purchase('${this.name}')">Buy VANS</button>
    </div>`
    }
    get CartTemplate(){
        return /*html*/ `
        <div class="col-3 card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">Price: $100</p>
        <p class="card-text">${this.quantity} <span id="VANSquant"></span></p>
    </div>
        `
    }
}