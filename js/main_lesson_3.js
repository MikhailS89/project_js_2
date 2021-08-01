const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const imgForms = 'img/oblojka.jpg';


class ProductList {
    constructor(container = '.product') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.renderList()
                this.getSum(); //производит подсчет суммы в объекте this.goods
            });
         
    }

    _getProducts(){
        return fetch (`${API}/catalogData.json`)
            .then(text => text.json())
            .catch(Error => {
                console.log(Error);
            })
    }

    renderList(){
        const block = document.querySelector(this.container);
        // console.log(this.goods);
        for (let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.renderItem());
        }
    }
    getSum(){
        let sum = null;
        this.goods.forEach((item) => {
            sum = item.price + sum;
            // console.log(sum);
        })
    }
}

class ProductItem {
    constructor(product){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = imgForms;
    }

    renderItem = () => 
        `<div class="product-item">
            <img class="product-item__img" src="${this.img}" alt="Product ${this.title}" height="100">
            <h3 class="product-item__title">${this.title}</h3>
            <p class="product-item__price">${this.price}</p>
            <button class="product-item__btn-buy">купить</button>
        </div>`;
    
}

let list = new ProductList();


class ElemBasket{
    constructor(box = '.header__cart'){
        this.box = box
        this.arrBasket = [];
        this._getOnClickBasket();
        this._getElBasket()
            .then(data => {
                this.arrBasket = [...data.contents];
                // console.log(data);
                // console.log(this.arrBasket);
                this.render();
            });
    }

    _getElBasket() {
        return fetch (`${API}/getBasket.json`)
            .then(data => data.json())
            .catch(Error => {
                console.log(Error);
            })
    }

    _getOnClickBasket(){
        document.querySelector(".header__btn-cart").addEventListener('click', () => {
            document.querySelector(this.box).classList.toggle("active-basket");
        });
    }

    render(){
        const block = document.querySelector(this.box);
        for (let product of this.arrBasket){
            const item = new ElemBasketItem(product);
            block.insertAdjacentHTML('beforeend', item.renderElemBasket());
        }
    }

}

class ElemBasketItem {
    constructor(product){
        this.title = product.product_name;
        this.quantity = product.quantity;
        this.price = product.price;
        this.img = imgForms;
    }
    renderElemBasket = () => 

        `<div class="header__cart-lot">
            <img class="header__cart-lot-img" src="${this.img}" alt="#" height="50">
            <p class="header__cart-lot-product">${this.title}</p>
            <p class="header__cart-lot-cost">${this.price}</p>
            <p class="header__cart-lot-quantity">${this.quantity}</p>
            <span class="header__cart-lot-plus">+</span>
        </div>`;
}

const elem = new ElemBasket();


class Basket{
    addGoods(){

    }
    removGoods(){

    }
    changeGoods(){

    }
    render(){

    }

}

