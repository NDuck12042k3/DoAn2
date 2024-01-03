function datHang(){
   // JavaScript to get the text content of the first h1 element
   var productTitles = document.getElementsByClassName("product-content-right-product-name");

   // Assuming there's only one element with the specified class
   if (productTitles.length > 0) {
       var name = productTitles[0].getElementsByTagName("h1")[0].textContent;
       console.log(name); // You can use this value as needed
       var id=productTitles[0].getElementsByTagName("p")[0].textContent;
       console.log(id);
   }
    // JavaScript to get the source of the image
    var productImageSrc = document.querySelector(".product-content-left-big-img img").src;
    console.log(productImageSrc); // You can use this value as needed



    var giatxt = document.getElementsByClassName("product-content-right-product-price");

    // Assuming there's only one element with the specified class
    if (giatxt.length > 0) {
        var giaTientxt = giatxt[0].getElementsByTagName("p")[0].textContent;
        var gia=parseInt(giaTientxt.replace(/[^0-9]/g, ''));
        console.log(gia); // You can use this value as needed
    }

    var quantityValue = document.querySelector('.quantity input[type="number"]').value;
        console.log("Quantity:", quantityValue);
    

    themSanPham(id, name, quantityValue, gia, productImageSrc)
}