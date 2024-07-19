document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    console.log('Product added:', {
        name: name,
        image: image,
        quantity: quantity,
        price: price
    });

    alert('Product added successfully!');
    
    // Clear form
    document.getElementById('productForm').reset();
});
/*Codigo elaborado por: JIOVANNY GUZMAN BUITRAGO
                             DESARROLLADOR*/