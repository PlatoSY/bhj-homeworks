const productQuantityControlsDec = Array.from(
  document.querySelectorAll('.product__quantity-control_dec')
);
const productQuantityControlsInc = Array.from(
  document.querySelectorAll('.product__quantity-control_inc')
);
const productAddButton = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

// console.log(productQuantityControlsDec);
// console.log(productQuantityControlsInc);
// console.log(productAddButton);
// console.log(cartProducts);

productQuantityControlsDec.forEach((item) => {
  item.addEventListener('click', () => {
    const quantityValue = item.nextElementSibling;

    if (+quantityValue.textContent > 1) {
      quantityValue.textContent--;
    } else {
      quantityValue.textContent = 1;
    }
  });
});

productQuantityControlsInc.forEach((item) => {
  item.addEventListener('click', () => {
    +item.previousElementSibling.textContent++;
  });
});

productAddButton.forEach((item) => {
  item.addEventListener('click', () => {});
});
