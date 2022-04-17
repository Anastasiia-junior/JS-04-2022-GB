const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status !== 200) {
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };

//     xhr.send();
// }



class ProductsList {
    constructor () {
        this.container = document.querySelector('.goods-list');
        this.goods = [];
        this.productsObjects = [];

        // this.fetchGoods();
        // this.render();
        this.getRequest(`${API}/catalogData.json`)
            .then(response => {
                console.log(response);
                this._goods = JSON.parse(response);
                this.render();
            })
            .catch((error) => console.log(error));
    }

    // fetchGoods () {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this._goods = JSON.parse(data); 
    //         this.render();
    //         console.log(this._goods);
    //     });
    // }

    render () {
        for (const good of this._goods) {
            const productsObject = new ProductItem(good);

            this.productsObjects.push(productsObject); 
            this.container.insertAdjacentHTML("beforeend", productsObject.getHtmlString());
        }
        document.querySelector('.total-sum').insertAdjacentHTML("afterbegin", this.getTotalPrice());
        this.addProductToCart(new CartItem);
    }

    getRequest = (url) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status !== 200) {
                        reject(xhr.responseText);
                    } else {
                        resolve(xhr.responseText);
                    }
                }
            };
    
            xhr.send();
        });
    
    }

    getTotalPrice () {
        let sum = 0;
        this.productsObjects.forEach(product => {
            sum += product.price; 
        }) ;
        return sum;
    }

    //навешиваем обработчик события на каждую кнопку товара
    addProductToCart(callback) {
        let arrOfAddButtons = document.querySelectorAll('.goods-item');
        arrOfAddButtons.forEach(element => {
            element.addEventListener('click', function (event) {
                let button = element.querySelector('.buy-button');
                if (event.target === button) {
                    //при нажатии на кнопку див с товаром должен добавляться в корзину и отрисовываться 
                    callback(element);
                };
            });
        });
    }
};

class ProductItem {
    constructor (product, img = 'http://via.placeholder.com/200x150') {
        this.id = product.id_product; 
        this.title = product.product_name; 
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

class CartItem extends ProductItem{
    constructor (product, img) {
        super(product, img);
        this.render();
    }
    render () {
        return`
        <div class='cart-item'>
            ${this.getHtmlString()}
            <div>
                <p> Количество </p>
                <p> </p>
            </div>
            <div> 
                <p> Цена</p>
                <p> ${this.price} </p>
            </div>
        </div>`
    }

};

// class CartList {
//     constructor () {
//         this.container = document.querySelector('.cart-container');
//         //this.container.insertAdjacentHTML('beforeend', this.render());
//     }

//     render () {
//         return `<div class='cart-item'>
//             ${}
//         </div>`
//     }
//     addItem() {
//         //some code
//     }
//     removeItem () {
//         //some code
//     }
//     getTotalPrice () {
//         //some code
//     }

// };



// // Promise 

// let num = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (a) resolve(200 + a);
//             else reject('No a value');
//         }, 2000);
//     });
// }

// num (12)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




