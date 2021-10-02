const app = Vue.createApp({
    data () {
        return {
            cart: [],
            premium: true,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        }
    },
    computed: {

    },
    methods: {
        addToCartMain (id) {
            if (this.cart.indexOf(id) == -1)
                this.cart.push(id)
        },
        aremoveFromCartMain (id) {
            if (this.cart.indexOf(id) != -1)
                this.cart.splice(this.cart.indexOf(id), 1)
        },
    },
})