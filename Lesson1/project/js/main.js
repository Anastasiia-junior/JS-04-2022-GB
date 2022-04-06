// const products = [
//     {id: 1, title: 'Notebook', price: 1000},
//     {id: 2, title: 'Mouse', price: 100},
//     {id: 3, title: 'Keyboard', price: 250},
//     {id: 4, title: 'Gamepad', price: 150},
// ];

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="by-btn">Добавить</button>
//               </div>`;
// };

// const renderProducts = (list) => {
//     const productList = list.map((good) => {
//         return renderProduct(good.title, good.price);
//     });
//     document.querySelector('.products').innerHTML = productList;

//     console.log(productList);
// };

// renderProducts(products);

const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title, price) => `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;


const renderProducts = (list) => {
    const productList = list.map(good => renderProduct(good.title, good.price)); //сократила запись стрелочной функции
    let str = '';
    productList.forEach(element => {
        str += element;
    });
    document.querySelector('.products').innerHTML = str; // убирает запятые между эелементами на странице

    return productList;
};

renderProducts(products);