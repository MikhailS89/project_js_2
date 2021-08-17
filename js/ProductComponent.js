Vue.component('Prods', {
    props: ['list', 'src'],
    template: `
    <div class="product roboto_light">
        <Product v-for="(item, index) in list" :key="index" :src="src" :product="item"></Product>
    </div>`
});
Vue.component('Product', {
    props: ['product', 'src'],
    template: `
        <div class="product-item" >
            <img class="product-item__img" :src="src" alt="#" height="100" />
            <h3 class="product-item__title">{{ product.product_name }}</h3>
            <p class="product-item__price">{{ product.price }}</p>
            <button class="product-item__btn-buy" @click="$parent.$emit('add', product)">купить</button>
        </div>`
})
