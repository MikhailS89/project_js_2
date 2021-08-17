Vue.component('vfilter', {
    props: ['value'],
    template: `
    <form class="header__search-form" action="#" @submit.prevent="$emit('sub')">
        <input class="header__search" type="text" :value="value" @input="onInput">
        <button class="header__search-btn" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>`,
    methods: {
        onInput(event) {
            // console.log('event: ', event.target.value)
            this.$emit('input', event.target.value)
            // this.$root.$data.userSearch = event.target.value
        }
    }
})



// console.dir(Vue);

// Vue.component('filter', {
//     template: `

//     <form class="header__search-form" action="#" @submit.prevent="filter()">
//         <input class="header__search" type="text" v-model="$root$data.userSearch">
//         <button class="header__search-btn" type="submit">
//             <i class="fas fa-search"></i>
//         </button>
//     </form>`
// })


