const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',

    data: {
        catalogUrl: '/catalogData.json',
        goods: [],
        imgCatalog: 'http://via.placeholder.com/200x150',
        searchLine: '',
        isVisibleCart: false,
        filteredGoods: [],
        cart: [
            // {
            //     id: 1,
            //     img: 'http://via.placeholder.com/200x150',
            //     title: 'dvdv',
            //     price: 100,
            //     quantity: 1
            // },
            // { 
            //     id: 2, 
            //     img: 'http://via.placeholder.com/200x150', 
            //     title: 'cvdfvd', 
            //     price: 4535, 
            //     quantity: 1 
            // },
            
        ]
    },

    methods: {
        getJson(url) {
            return fetch(url)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
        }, 
        addProduct(product) {
            console.log(product.id_product)
        },

        filterGoods() {

        }

    },

    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
            for (let el of data) {
                this.goods.push(el);
            }
        })
    }


})