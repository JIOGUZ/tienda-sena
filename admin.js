// admin.js
import { db, storage } from "./f_online.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const imageInput = document.getElementById('image');
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;

        if (imageInput.files.length > 0) {
            const imageFile = imageInput.files[0];
            const storageRef = ref(storage, `products/${imageFile.name}`);
            
            try {
                // Subir la imagen al almacenamiento
                await uploadBytes(storageRef, imageFile);
                const imageUrl = await getDownloadURL(storageRef);
                
                // Agregar documento a Firestore
                await addDoc(collection(db, "products"), {
                    name: name,
                    image: imageUrl,
                    quantity: parseInt(quantity),
                    price: parseFloat(price)
                });

                alert('Producto adherido exitosamente!');
                document.getElementById('productForm').reset();
            } catch (error) {
                console.error("Error adding document: ", error);
                alert('Error al adherir el producto. Inténtalo nuevamente.');
            }
        } else {
            alert('Por favor, selecciona una imagen.');
        }
    });
});
