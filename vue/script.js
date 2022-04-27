
const app = new Vue({
    el: '#app',
    data: {
        show: true,
        title: 'Hello!',
        link: 'https://google.com',
        completeElement: `<span>I'm a new element <a href="https://google.com"
                            id="link"> google </a></span>`,
        number: 0,
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,

        width: 100,
        color: '#ccc',

        products: [
            {
                id: 1,
                img: 'http://via.placeholder.com/200x150',
                title: 'dvdv',
                price: 100,
                quantity: 1
            },
            { 
                id: 2, 
                img: 'http://via.placeholder.com/200x150', 
                title: 'cvdfvd', price: 4535, quantity: 1 },
            { 
                id: 3, 
                img: 'http://via.placeholder.com/200x150', 
                title: 'dsfvbfbrtns', price: 234, quantity: 1 }
        ]
    },
    methods: {
        sayHello() {
            this.title = "Changed";
            return this.title;
        },
        increase(step, event) {
            console.log(event);
            this.counter += step;
        },

        getCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        result() {
            console.log('method');
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    },

    computed: {
        computedResult() {
            console.log('computed');
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        },

        myStyle() {
            return {
                backgroundColor: this.color,
                width: `${this.width}px`,
                height: `${this.width}px`,
            }
        }
    }


}); 