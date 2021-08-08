const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
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
        return fetch (`${API}`)
            .then(text => text.json())
            .catch(Error => {
                console.log(Error);
            })
    }
    getSum(){
        let sum = null;
        this.goods.forEach((item) => {
            sum = item.price + sum;
            console.log(sum);
        })
    }

    renderList(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            // const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', this.renderItem(product));
        }
    }

    renderItem = product => 
        `<div class="product-item">
            <img class="product-item__img" src="${imgForms}" alt="Product ${product.product_name}" height="100">
            <h3 class="product-item__title">${product.product_name}</h3>
            <p class="product-item__price">${product.price}</p>
            <button class="product-item__btn-buy">купить</button>
        </div>`;
}

let list = new ProductList();


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

class ElemBasket{
    render(){

    }
}