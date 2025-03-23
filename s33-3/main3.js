let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];

function filterProducts() {
    let category = document.getElementById('category').value;
    let result = document.getElementById('result');
    result.innerHTML = '';

    let filteredDishes = dish.filter(item => item.category === category);

    if (filteredDishes.length > 0) {
        filteredDishes.forEach(item => {
            result.innerHTML += `<p>Tên đồ ăn: ${item.name} , Danh Mục:${item.category}</p>`;
        });
    }
}