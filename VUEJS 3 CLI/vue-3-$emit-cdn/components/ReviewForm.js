app.component('review-form', {
    template:
        /*html*/
        `<form @submit.prevent="onReview">
            <h3>Leave a review</h3>
            <label for="name">Name </label><br/>
            <input type="text" name="name" id="name" v-model="name"/><br/>
            <label for="review">Review </label><br/>
            <textarea name="review" id="review" v-model="review"/><br/>
            <label for="rating">Rating </label><br/>
            <select name="rating" id="rating" v-model.number="rating"><br/>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select><br/>
            <input type="submit" value="Post"/>
        </form>`
    ,
    data () {
        return {
            name: '',
            review: '',
            rating: null,
        }
    },
    methods: {
        onReview () {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
        }
    },
})