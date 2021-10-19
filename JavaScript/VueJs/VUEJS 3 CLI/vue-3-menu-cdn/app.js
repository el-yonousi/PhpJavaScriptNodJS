const menus =
    [
        { id: 0, item: "home", href: "home", icon: "fas fa-home" },
        { id: 1, item: "About", href: "about", icon: "fas fa-question-circle" },
        { id: 2, item: "Contact", href: "contact", icon: "fas fa-id-badge" },
        { id: 3, item: "Services", href: "services", icon: "fas fa-briefcase" }
    ];

const app = Vue.createApp({
    data () {
        return {
            /* this variable used to open or close togle */
            toggle: false,
            /* this variable used to hide open or close icon */
            hide: true,
            /* this variable used to activate class active */
            selectedIndex: 0,
            menus: menus,
            books:
                [
                    { title: "JavaScript", author: "Brendan Eich ", date: 1995, isFav: true, img: "https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphdmFzY3JpcHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", },
                    { title: "Php", author: "Rasmus Lerdorf", date: 1994, isFav: true, img: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                    { title: "Python", author: "Guido van Rossum", date: 1991, isFav: true, img: "https://images.unsplash.com/photo-1599837565318-67429bde7162?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                    { title: "C Sharp", author: "Microsoft", date: 2000, isFav: false, img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YyUyMHNoYXJwJTIwY29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
                ],

            /* just for test */
            x: 0,
            y: 0,
            a: 0
        }
    },

    methods: {
        /* open or close toggle */
        open () {
            this.toggle = !this.toggle
            this.hide = !this.hide
        },
        /* set active class for click button */
        setActiveClass (id) {
            this.selectedIndex = id
        },

        isFavorite (book) {
            book.isFav = !book.isFav
        },

        handlEvent (e, name) {
            console.log(e, e.type)

            if (name)
                console.log(name)
        },

        handleMouseMouve (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        /* test with computed properties */
        tests (a) {
            if (!a)
            {
                alert('please fill the input value')
                return
            }
            this.a = parseFloat(a)
            this.x++
        }
    },
    computed: {
        filteredBoxes () {
            return this.books.filter((book) => book.isFav)
        },

        test () {
            return this.a + this.x
        },
    },
});
app.mount("#app");