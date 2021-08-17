// Vue.component('vError', {
//     props: ['ers'],
//     template: `
//     <div>
//         <div class="main__error" v-if="ers == true">
//         <p class="main__text roboto_bold">error</p>
//         </div>
//     </div>`,
    
// })

Vue.component('Verror', {
    template: `
        <div class="main__error">
            <p class="main__text roboto_bold"><slot></slot></p>
        </div>`,
})



// console.log(this.err);
// v-if=true

// `<div class="main__error" v-show='$root.$data.ers'>
//     <p class="main__text roboto_bold">error</p>
//     </div>`