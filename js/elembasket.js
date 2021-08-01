
const apiElemBasket = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';
const imgElemBasket = 'img/oblojka.jpg';

class ElemBasket{
    constructor(box = '.header'){
        this.box = box
        this.arrBasket = [];
        this._getElBasket()
            .then(data => {
                this.arrBasket = [...data.contents];
                // console.log(data);
                console.log(this.arrBasket);
                this.render();
            });
    }

    _getElBasket() {
        return fetch (`${apiElemBasket}`)
            .then(data => data.json())
            .catch(Error => {
                console.log(Error);
            })
    }

    render(){
        const block = document.querySelector(this.box);
        for (let product of this.arrBasket){
            block.insertAdjacentHTML('beforeend', this.renderElemBasket(product));
        }
    }

    renderElemBasket = products => 

        `<div class="header__cart-lot">
            <img class="header__cart-lot-img" src="${imgElemBasket}" alt="#" height="50">
            <p class="header__cart-lot-product">${products.product_name}</p>
            <p class="header__cart-lot-cost">${products.price}</p>
            <p class="header__cart-lot-quantity">${products.quantity}</p>
            <span class="header__cart-lot-plus">+</span>
        </div>`;
}

const elem = new ElemBasket();

elem.renderElemBasket();