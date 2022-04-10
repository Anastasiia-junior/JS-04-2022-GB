class ProductsList {
    constructor () {
        this.container = document.querySelector('.goods-list');
        this.goods = [];
        this.productsObjects = [];

        this.fetchGoods();
        this.render();
    }

    fetchGoods () {
        this.goods = [
            { id: 1, title: 'Shirt', price: 150 },
            { id: 2, title: 'Socks', price: 50 },
            { id: 3, title: 'Jacket', price: 350 },
            { id: 4, title: 'Shoes', price: 250 },
        ]
    }

    render () {
        for (const good of this.goods) {
            const productsObject = new ProductItem(good);

            this.productsObjects.push(productsObject); 
            this.container.insertAdjacentHTML("beforeend", productsObject.getHtmlString());
        }
        document.querySelector('.total-sum').insertAdjacentHTML("afterbegin", this.getTotalPrice());
    }

    getTotalPrice () {
        let sum = 0;
        this.productsObjects.forEach(product => {
            sum += product.price; 
        }) ;
        return sum;
    }
};

class ProductItem {
    constructor (product, img = 'http://via.placeholder.com/200x150') {
        this.id = product.id; 
        this.title = product.title; 
        this.price = product.price; 
        this.img = img; 
    }

    getHtmlString () {
        return `<div class="goods-item">
            <img src='${this.img}'>
            <h3>${this.title}</h3>
            <p>${this.price} \u20bd</p>
            <button class="buy-button">Купить</button>
        </div>`;
    }
}

new ProductsList(); 


//классы для корзины товаров

class CartItem {
    constructor () {
        //some code
    }
    render () {
        //
    }

};

class CartList {
    constructor () {
        //some code
    }
    addItem() {
        //some code
    }
    removeItem () {
        //some code
    }
    getTotalPrice () {
        //some code
    }

};



//с прошлого урока

// class GoodsItem {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }

//     render() {
//         return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
// };

// class GoodsList {
//     constructor() {
//         this.goods = [];
//     }
//     fetchGoods() {
//         this.goods = [
//             { title: 'Shirt', price: 150 },
//             { title: 'Socks', price: 50 },
//             { title: 'Jacket', price: 350 },
//             { title: 'Shoes', price: 250 },
//         ]
//     }
//     render() {
//         let str = '';
//         this.goods.forEach(good => {
//             const goodItem = new GoodsItem(good.title, good.price);
//             str += goodItem.render();
//         });

//         document.querySelector('.goods-list').insertAdjacentHTML("afterbegin", str); 
//         document.querySelector('.total-sum').insertAdjacentHTML("afterbegin", this.getTotalPrice());
//     }
    // getTotalPrice () {
    //     let sum = 0;
    //     this.goods.forEach(good => {
    //         sum += good.price; 
    //     }) ;
    //     return sum;
    // }
// };

// const list = new GoodsList ();
// list.fetchGoods ();
// list.render ();




