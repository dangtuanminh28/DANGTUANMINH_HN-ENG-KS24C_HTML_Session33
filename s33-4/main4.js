const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 39990000,
        image: 'https://ngocnguyen.vn/cdn/images/202308/goods_img/dell-xps-15-9510-core-i7-11800h-rtx-3050ti-156-inch-fhd-P15129-1691456870207.png',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max', price: 28990000,
        image: 'https://techworldmobile.vn/media/product/3444_iphone_15_pro_xanh.jpg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra', price: 32990000,
        image: 'https://didongmango.com/images/products/2024/10/30/large/nh-dau-tien-trang-san-pham_1730339098.jpg.webp',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5', price: 19990000,
        image: 'https://bizweb.dktcdn.net/100/451/485/products/tai-nghe-sony-wh-1000mx5-black-1.jpg?v=1655979261477',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9', price: 7990000,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_565_1_.png',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5', price: 4990000,
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_211.png',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];
function displayProducts(productsToShow) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    productsToShow.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h5>${product.name}</h5>
                <p>${product.description}</p>
                <p class="price">${product.price.toLocaleString()} VND</p>
            </div>
        `;
    });
}

displayProducts(products);