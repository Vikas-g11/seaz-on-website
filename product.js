// Function to get the product ID from the URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Sample dummy product data (replace this with real data as you get it)
const products = [
    {
        id: '1',
        title: 'Mini Summer Fan',
        description: 'A compact and portable mini fan, perfect for hot summer days.',
        price: '₹499',
        image: 'https://via.placeholder.com/500x500.png?text=Product+1'
    },
    {
        id: '2',
        title: 'Winter Jacket',
        description: 'Keep warm with this stylish winter jacket.',
        price: '₹1299',
        image: 'https://via.placeholder.com/500x500.png?text=Product+2'
    }
    // Add more dummy products here
];

// Function to load the product details based on the product ID
function loadProductDetails() {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);

    if (product) {
        // Populate the product details on the page
        document.getElementById('product-img').src = product.image;
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;
    } else {
        // Handle case where the product is not found
        document.getElementById('product-title').textContent = 'Product Not Found';
        document.getElementById('product-description').textContent = 'Sorry, we couldn\'t find this product.';
    }
}

// Show the hidden order page when the "Place Order" button is clicked
document.getElementById('place-order-btn').addEventListener('click', function () {
    document.getElementById('order-page').style.display = 'block';
});

// Load product details when the page loads
window.onload = loadProductDetails;
