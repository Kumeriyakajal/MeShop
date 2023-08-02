function applyFilter() {
    // Get selected colors
    const colors = Array.from(document.querySelectorAll('input[type="checkbox"][id^="color"]:checked')).map(c => c.id);
    
    // Get selected sizes
    const sizes = Array.from(document.querySelectorAll('input[type="checkbox"][id^="size"]:checked')).map(s => s.id);
    
    // Get selected ratings
    const ratings = Array.from(document.querySelectorAll('input[type="checkbox"][id^="rating"]:checked')).map(r => parseInt(r.id.replace("rating", "")));
    
    // Get selected price range
    const priceRange = document.querySelector('input[type="radio"][name="price"]:checked').id;

    // Apply the filter and hide/show products accordingly
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        const color = product.innerText.split(", ")[0];
        const size = product.innerText.split(", ")[1];
        const rating = parseInt(product.innerText.split(", ")[2]);
        const price = parseInt(product.innerText.split(", ")[3].replace("$", ""));
        
        const showProduct = (
            (colors.length === 0 || colors.includes(color)) &&
            (sizes.length === 0 || sizes.includes(size)) &&
            (ratings.length === 0 || ratings.includes(rating)) &&
            (
                (priceRange === "price0to25" && price >= 0 && price <= 25) ||
                (priceRange === "price25to50" && price > 25 && price <= 50) ||
                (priceRange === "price50to100" && price > 50 && price <= 100) ||
                (priceRange === "price100onwards" && price > 100)
            )
        );

        product.style.display = showProduct ? "block" : "none";
    });
}

function showContent(category) {
    const allContents = document.querySelectorAll('.content');
    for (const content of allContents) {
        content.classList.remove('show');
    }

    document.getElementById(category + 'Content').classList.add('show');
}
