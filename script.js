const productGrid = document.getElementById('productGrid');

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;

    if (name && price && image) {
        const product = document.createElement('div');
        product.classList.add('product');
        product.innerHTML = `
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
            <p>R$ ${price}</p>
            <button onclick="removeProduct(this)" class="product-button">Remover</button>
        `;
        productGrid.appendChild(product);

        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productImage').value = '';
    } else {
        alert('Todos os campos devem ser preenchidos!');
    }
}

function removeProduct(button) {
    const product = button.parentElement;
    productGrid.removeChild(product);
}

const sampleProducts = [
    { name: 'Ferrari Purosangue', price: '7,5 mi', image: 'https://cdn.motor1.com/images/mgl/rKOPMX/s1/ferrari-purosangue---avaliacao.jpg' },
    { name: 'Kawasaki Ninja 300', price: '30 mil', image: 'https://motos.net.br/wp-content/uploads/kawasaki-ninja-300-design.jpg' },
    { name: 'Honda Civic 2022', price: '130 mil', image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/49870001/transform/fl_progressive,f_webp,q_85,w_959' },
    { name: 'Ferrari Purosangue', price: '7,5 mi', image: 'https://cdn.motor1.com/images/mgl/rKOPMX/s1/ferrari-purosangue---avaliacao.jpg' },
    { name: 'Kawasaki Ninja 300', price: '30 mil', image: 'https://motos.net.br/wp-content/uploads/kawasaki-ninja-300-design.jpg' },
    { name: 'Honda Civic 2022', price: '130 mil', image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/49870001/transform/fl_progressive,f_webp,q_85,w_959' },
    { name: 'Ferrari Purosangue', price: '7,5 mi', image: 'https://cdn.motor1.com/images/mgl/rKOPMX/s1/ferrari-purosangue---avaliacao.jpg' },
    { name: 'Kawasaki Ninja 300', price: '30 mil', image: 'https://motos.net.br/wp-content/uploads/kawasaki-ninja-300-design.jpg' },
    { name: 'Honda Civic 2022', price: '130 mil', image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/49870001/transform/fl_progressive,f_webp,q_85,w_959' },
];

sampleProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>R$ ${product.price}</p>
        <button onclick="removeProduct(this)" class="product-button">Remover</button>
    `;
    productGrid.appendChild(productDiv);
});
