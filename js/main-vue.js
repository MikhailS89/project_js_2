const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        filterProductsUrl: '/catalogData.json',
        basketUrl: '/getBasket.json',
        products: [], //массив для добавления товара в католог
        // imgCatalog: 'https://via.placeholder.com/200x150',
        filterProducts: [], //массив для фильтра товаров
        basket: [],
        imgCatalog: 'img/oblojka.jpg',
        userSearch: '',
        show: false,
        error: false
    },
    watch: {
        userSearch (next) {
            console.log('userSearch: ', next)
        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(text => text.json())
                .catch(error => {
                    console.log(error);
                    this.error = true;
                })
        },

        addProduct(item){
            // console.log(item);
            // let box = 'id_product' in item;
            let box = this.basket.find(arr => arr.id_product == item.id_product);
            if(box) {
                box.quantity++;
                // console.log(box);
            }
        },

        removeProduct(item){
            // console.log(item);
            if(item.quantity>1){
                item.quantity--;
            } else {
                this.basket.splice(this.basket.item, 1);
            }
        },

        onFilter () {
            console.log('filter')
            let regexp = new RegExp(this.userSearch, 'i');
            this.filterProducts = this.products.filter(item => regexp.test(item.product_name));
        }
    },

    mounted() {
        this.getJson(`${API + this.filterProductsUrl}`)
            .then(data => {
                // console.log(data); //проверка
                for (let item of data){
                    this.products.push(item);
                    this.filterProducts.push(item);
                }
                // console.log(this.filterProducts);
            });
        this.getJson(`${API + this.basketUrl}`)
            .then(data => {
                // console.log(data); 
                for (let item of data.contents){
                    this.basket.push(item);
                    
                }
                // console.log(this.basket);
            })
    }
})

// console.log('app: ', app)
// console.log('vue: ', Vue)
console.dir(Vue)
