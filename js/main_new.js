class ProductList {
    constructor(container = '.product') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.renderList();
        this.getSum(); //производит подсчет суммы в объекте this.goods
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'notebook', price: 2000, img: 'img/oblojka.jpg'},
            {id: 2, title: 'mouse', price: 20, img: ''},
            {id: 3, title: 'reyboard', price: 200, img: 'img/oblojka.jpg'},
            {id: 4, title: 'gamepad', price: 50, img: 'img/oblojka.jpg'},
        ];
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
            <img class="product-item__img" src="${product.img}" alt="Product ${product.title}" height="100">
            <h3 class="product-item__title">${product.title}</h3>
            <p class="product-item__price">${product.price}</p>
            <button class="product-item__btn-buy">купить</button>
        </div>`;
}

let list = new ProductList();


//Отрисовывает корзину
class Cart{

}

//Отображает товары в корзине
class CartItem{

}

//Проверяет наличие товаров в корзине (есть или нет)
class CartOnItem{

}

//Добавляет товары в корзину
class CartAdd{

}

//Удаляет товары в корзине
class CartRemove{

}