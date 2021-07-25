const products = [
    {id: 1, title: 'notebook', price: 2000, img: 'img/oblojka.jpg'},
    {id: 2, title: 'mouse', price: 20, img: ''},
    {id: 3, title: 'reyboard', price: 200, img: 'img/oblojka.jpg'},
    {id: 4, title: 'gamepad', price: 50, img: 'img/oblojka.jpg'},
];


const renderProduct = (title, price, img) => 
    `<div class="product-item">
        <img class="product-item__img" src="${img}" alt="Product ${title}" height="100">
        <h3 class="product-item__title">${title}</h3>
        <p class="product-item__price">${price}</p>
        <button class="product-item__btn-buy">купить</button>
    </div>`;


const renderPage = product => {
    const list = product.map(item => renderProduct(item.title, item.price, item.img));
    // console.log(list);
    document.querySelector('.product').insertAdjacentHTML('afterbegin', list.join(''));
}; 


renderPage(products);