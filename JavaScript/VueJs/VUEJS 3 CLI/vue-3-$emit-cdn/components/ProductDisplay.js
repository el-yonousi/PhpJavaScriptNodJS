app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        ids: String,
        sizes: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
        <div class="product-display"
            style="width: 20rem; border: 1px solid rebeccapurple; margin-bottom: 10px;">
            <div class="product-container">
                <h1>{{product.title}}</h1>
                <div class="product-image">
                    <img style="width: 100%; height: 18rem;" :src="image" :alt="product.title" srcset="">
                </div>
                <code v-if="inStock >= 10" style="background-color: green;color: white;">in stock</code>
                <code v-else-if="inStock > 0"
                    style="background-color: yellow;color: black;">the quantity limeted</code>
                <code v-else style="background-color: red; color: white;">out Stock</code>
                <div class="product-info">
                    {{product.description}}
                </div>
                <ul style="list-style: none;">
                    <li v-for="(detail, index) in product.details" key="index">{{index}}:: {{detail}}</li>
                </ul>
                <ul style="list-style: none;">
                    <li v-for="(size, index) in sizes" key="index">{{index}}:: {{size}}</li>
                </ul>
                <ul style="list-style: none;">
                    <div style="display: flex;">
                        <li v-for="(color, index) in product.variants" key="product.id"
                            @mouseover="updateImage(index)"
                            :style="{backgroundColor: color.color}, style" style>
                        </li>
                    </div>
                </ul>
                <p>Shipping:: {{shipped}}</p>
                <button :disabled="inStock <= 0" @click="addToCartProduct">Add to Cart</button>
                <button @click="removeFromCartProduct">Remove from Cart</button><br />
                <a v-if="product.onSale" :href="product.download" download="image.jpg">By Now</a>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="reviewFormOnSubmit"></review-form>
        </div>
        `
    ,
    data () {
        return {

            brand: 'CASETRUE',
            style: {
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                padding: '10px',
                border: '1px solid red'
            },
            product:
            {
                id: 3,
                selectedVariant: 0,
                title: 'Bags',
                img: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                download: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: 'this is a beatifull Sockets',
                inStock: 10,
                variants: [
                    { id: this.ids, color: 'black', img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', qte: 15 },
                    { id: this.ids, color: 'violet', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', qte: 0 }
                ]
            },
            reviews: [],
        }
    },
    methods: {
        addToCartProduct () {
            this.$emit('add-to-card', this.product.variants[this.product.selectedVariant].id)
        },
        removeFromCartProduct () {
            this.$emit('remove-from-card', this.product.variants[this.product.selectedVariant].id)
        },
        updateImage (index) {
            this.product.selectedVariant = index
        },
        resetImage (index) {
            this.products[index].img = this.image
        },
        reviewFormOnSubmit (review) {
            this.reviews.push(review)
        }
    },
    computed: {
        image () {
            return this.product.variants[this.product.selectedVariant].img
        },
        inStock () {
            return this.product.variants[this.product.selectedVariant].qte
        },
        shipped () {
            if (this.premium)
            {
                return 'Free'
            }
            else
            {
                return 2.99
            }
        },
    }
})