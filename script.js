document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");
    const sellForm = document.getElementById("sell-form");
    const cartItems = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout");
    let cart = [];

    // Sample books (this will later be fetched from a database)
    let books = [
        { title: "Book A", author: "Author A", price: 200 },
        { title: "Book B", author: "Author B", price: 150 },
    ];

    // Function to display books
    function displayBooks() {
        bookList.innerHTML = "";
        books.forEach((book, index) => {
            let div = document.createElement("div");
            div.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: ₹${book.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            `;
            bookList.appendChild(div);
        });
    }

    // Function to add book to cart
    window.addToCart = function(index) {
        cart.push(books[index]);
        updateCart();
    };

    // Function to update cart display
    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach((book, index) => {
            let div = document.createElement("div");
            div.innerHTML = `
                <h4>${book.title} - ₹${book.price}</h4>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(div);
        });
        document.getElementById("cart-count").innerText = cart.length;
    }

    // Function to remove item from cart
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    // Handle selling a book
    sellForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let newBook = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            price: document.getElementById("price").value,
        };
        books.push(newBook);
        displayBooks();
        sellForm.reset();
    });

    // Checkout process
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Cart is empty!");
        } else {
            alert("Proceeding to payment...");
            cart = [];
            updateCart();
        }
    });

    // Display books initially
    displayBooks();
});
