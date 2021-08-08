const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [], //массив для добавления товара в католог
        // imgCatalog: 'https://via.placeholder.com/200x150',
        filterProducts: [], //массив для фильтра товаров
        imgCatalog: 'img/oblojka.jpg',
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(text => text.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            console.log(product.id_product);
        },
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filterProducts = this.products.filter(item => regexp.test(item.product_name));
        }

    },

    mounted(){
        this.getJson(`${API+ this.catalogUrl}`)
            .then(data => {
                console.log(data); //проверка
                for (let item of data){
                    this.products.push(item);
                    this.filterProducts.push(item);
                }
                console.log(this.filterProducts);
            });
        
    }
})